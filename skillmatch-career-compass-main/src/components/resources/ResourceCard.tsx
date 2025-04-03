
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Star, Clock } from 'lucide-react';

export interface Resource {
  id: string;
  title: string;
  provider: string;
  type: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  rating: number;
  url: string;
  tags: string[];
  description: string;
}

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-blue-100 text-blue-800';
      case 'Advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="skill-card h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge className="bg-skillteal-light text-skillteal-dark">{resource.type}</Badge>
          <Badge className={getLevelColor(resource.level)}>{resource.level}</Badge>
        </div>
        <CardTitle className="text-xl font-bold mt-2">{resource.title}</CardTitle>
        <CardDescription>
          <div className="mt-1 flex flex-col space-y-1">
            <div className="text-sm">By {resource.provider}</div>
            <div className="flex items-center text-sm gap-1">
              <Clock className="h-3.5 w-3.5" /> {resource.duration}
            </div>
            <div className="flex items-center text-sm gap-1">
              <Star className="h-3.5 w-3.5 text-yellow-500" /> {resource.rating}/5
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {resource.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-skillteal hover:bg-skillteal-dark text-white"
          onClick={() => window.open(resource.url, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-2" /> Access Resource
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
