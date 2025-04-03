
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Save } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const questions = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What's your preferred work environment?",
    options: [
      "Remote work",
      "Office environment",
      "Hybrid (mix of remote and office)",
      "Freelance/Independent contracting"
    ]
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "Which industry are you most interested in?",
    options: [
      "Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Creative/Design"
    ]
  },
  {
    id: 3,
    type: 'text',
    question: "Describe your biggest professional achievement to date.",
    placeholder: "Share your most significant professional accomplishment..."
  },
  {
    id: 4,
    type: 'text',
    question: "What are your primary career goals for the next 5 years?",
    placeholder: "Describe where you see yourself professionally in 5 years..."
  }
];

const PortfolioQuestions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const { toast } = useToast();
  
  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;
  
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handleAnswerChange = (value: string) => {
    setAnswers({
      ...answers,
      [question.id]: value
    });
  };
  
  const handleSaveAnswers = () => {
    console.log('Saving answers:', answers);
    toast({
      title: "Answers Saved",
      description: "Your responses have been saved to your portfolio.",
    });
  };
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  
  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>Portfolio Questions</CardTitle>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
          <div 
            className="bg-skillblue h-2 rounded-full transition-all" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-sm text-gray-500 mt-1">
          Question {currentQuestion + 1} of {questions.length}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
        
        {question.type === 'multiple-choice' ? (
          <RadioGroup value={answers[question.id]} onValueChange={handleAnswerChange}>
            <div className="space-y-3">
              {question.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-skillblue hover:bg-blue-50 transition-colors">
                  <RadioGroupItem id={`option-${index}`} value={option} />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        ) : (
          <Textarea 
            placeholder={question.placeholder} 
            value={answers[question.id] || ''} 
            onChange={(e) => handleAnswerChange(e.target.value)}
            className="min-h-[150px]"
          />
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          disabled={isFirstQuestion}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        
        <Button
          variant="default"
          onClick={handleSaveAnswers}
        >
          <Save className="mr-2 h-4 w-4" /> Save Answers
        </Button>
        
        <Button 
          variant="outline" 
          onClick={handleNext}
          disabled={isLastQuestion}
        >
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PortfolioQuestions;
