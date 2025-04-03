
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, CheckCircle, RefreshCw } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Question {
  id: number;
  question: string;
  options: string[];
  category: string;
}

interface SkillQuizProps {
  onComplete: (results: Record<string, number>) => void;
}

const questions: Question[] = [
  {
    id: 1,
    question: "How much do you enjoy solving complex technical problems?",
    options: ["Not at all", "Somewhat", "Moderately", "Very much", "Extremely passionate"],
    category: "technical"
  },
  {
    id: 2,
    question: "How comfortable are you with working in collaborative team environments?",
    options: ["Not comfortable", "Somewhat comfortable", "Moderately comfortable", "Very comfortable", "Extremely comfortable"],
    category: "collaboration"
  },
  {
    id: 3,
    question: "How interested are you in analyzing data and finding patterns?",
    options: ["Not interested", "Somewhat interested", "Moderately interested", "Very interested", "Extremely interested"],
    category: "analytical"
  },
  {
    id: 4,
    question: "How would you rate your creative problem-solving abilities?",
    options: ["Poor", "Fair", "Good", "Very good", "Excellent"],
    category: "creativity"
  },
  {
    id: 5,
    question: "How comfortable are you with public speaking and presentations?",
    options: ["Not comfortable", "Somewhat comfortable", "Moderately comfortable", "Very comfortable", "Extremely comfortable"],
    category: "communication"
  }
];

const SkillQuiz = ({ onComplete }: SkillQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    // Save the answer
    setAnswers({
      ...answers,
      [currentQuestion]: selectedOption
    });

    if (currentQuestion < questions.length - 1) {
      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      // Quiz completed
      setIsLoading(true);
      
      // Calculate results by category
      const results: Record<string, number> = {};
      questions.forEach((question, index) => {
        const score = answers[index] || 0;
        const category = question.category;
        
        if (!results[category]) {
          results[category] = 0;
        }
        
        results[category] += score;
      });
      
      // Normalize scores
      Object.keys(results).forEach(category => {
        const categoryQuestions = questions.filter(q => q.category === category).length;
        const maxScore = categoryQuestions * 4; // 4 is max score per question (index 4 = "Excellent")
        results[category] = Math.round((results[category] / maxScore) * 100);
      });
      
      // Simulate API call with delay
      setTimeout(() => {
        setIsLoading(false);
        setIsCompleted(true);
        onComplete(results);
      }, 1500);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedOption(null);
    setIsCompleted(false);
  };

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (isLoading) {
    return (
      <Card className="w-full max-w-3xl mx-auto p-8">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <RefreshCw className="animate-spin h-12 w-12 text-skillblue mb-6" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Analyzing your answers...</h3>
          <p className="text-gray-600">We're matching your profile with potential career paths.</p>
        </CardContent>
      </Card>
    );
  }

  if (isCompleted) {
    return (
      <Card className="w-full max-w-3xl mx-auto p-8">
        <CardContent className="flex flex-col items-center justify-center py-6">
          <CheckCircle className="h-16 w-16 text-green-500 mb-6" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Assessment Completed!</h3>
          <p className="text-gray-600 text-center mb-8">
            Thank you for completing the assessment. Your personalized career recommendations are ready!
          </p>
          <Button onClick={restartQuiz} variant="outline" className="mt-4">
            Retake Assessment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-skillblue">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-6">{question.question}</h3>

        <RadioGroup 
          className="space-y-3" 
          value={selectedOption?.toString()} 
          onValueChange={(value) => handleOptionSelect(parseInt(value))}
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2 p-3 rounded-lg border hover:border-skillblue hover:bg-blue-50 transition-colors">
              <RadioGroupItem 
                id={`option-${index}`} 
                value={index.toString()} 
              />
              <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                {option}
              </Label>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-8 flex justify-end">
          <Button 
            onClick={handleNext}
            disabled={selectedOption === null}
            className="btn-primary"
          >
            {currentQuestion < questions.length - 1 ? (
              <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
            ) : (
              'Complete Assessment'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillQuiz;
