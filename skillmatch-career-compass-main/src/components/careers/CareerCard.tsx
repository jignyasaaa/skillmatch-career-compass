
import { MouseEventHandler } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';

export interface Career {
  id: string;
  title: string;
  description: string;
  matchPercentage: number;
  salary: string;
  growth: string;
  skills: string[];
  icon: string;
}

interface CareerCardProps {
  career: Career;
  onViewResources: MouseEventHandler<HTMLButtonElement>;
}

const CareerCard = ({ career, onViewResources }: CareerCardProps) => {
  const getMatchColor = (percentage: number) => {
    if (percentage >= 85) return 'bg-green-100 text-green-800';
    if (percentage >= 70) return 'bg-blue-100 text-blue-800';
    return 'bg-orange-100 text-orange-800';
  };

  return (
    <Card className="skill-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="font-medium text-xs text-gray-500">Match Score</div>
          <Badge className={`${getMatchColor(career.matchPercentage)}`}>
            {career.matchPercentage}% Match
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold flex items-center gap-2">
          <span className="text-2xl">{career.icon}</span>
          {career.title}
        </CardTitle>
        <CardDescription>
          <div className="flex flex-col gap-1 mt-1">
            <div className="text-sm">Avg. Salary: <span className="font-medium">{career.salary}</span></div>
            <div className="text-sm">Growth: <span className="font-medium">{career.growth}</span></div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4 text-sm">{career.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {career.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-4 flex-wrap">
        <Button className="btn-outline text-sm flex-1" size="sm">
          <ExternalLink className="h-4 w-4 mr-1.5" /> Explore Career
        </Button>
        <Button 
          className="bg-skillpurple hover:bg-skillpurple-dark text-white text-sm flex-1" 
          size="sm"
          onClick={onViewResources}
        >
          <BookOpen className="h-4 w-4 mr-1.5" /> Learning Resources
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
