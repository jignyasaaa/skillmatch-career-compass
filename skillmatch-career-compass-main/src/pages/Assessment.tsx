
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SkillQuiz from '@/components/assessment/SkillQuiz';
import CareerCard from '@/components/careers/CareerCard';
import { Button } from '@/components/ui/button';
import { careerPaths } from '@/data/mockData';
import { ArrowLeft, BarChart, FileText, PieChart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Assessment = () => {
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [skillResults, setSkillResults] = useState<Record<string, number>>({});
  const [selectedCareer, setSelectedCareer] = useState<string | null>(null);
  const navigate = useNavigate();
  
  const handleAssessmentComplete = (results: Record<string, number>) => {
    setSkillResults(results);
    setAssessmentCompleted(true);
    console.log("Assessment results:", results);
  };
  
  const handleViewResources = (careerId: string) => {
    setSelectedCareer(careerId);
    navigate('/resources', { state: { careerId } });
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-skillblue-light/50 to-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-skillblue hover:text-skillblue-dark flex items-center mb-6">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Skill Assessment</h1>
          <p className="text-gray-600 max-w-2xl">
            Discover career paths that match your skills and interests. Answer a few questions about your preferences and we'll provide personalized recommendations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!assessmentCompleted ? (
          <SkillQuiz onComplete={handleAssessmentComplete} />
        ) : (
          <div className="space-y-10">
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Your Skill Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(skillResults).map(([skill, score]) => (
                  <div key={skill} className="bg-gray-50 rounded-lg p-4 border">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium capitalize">{skill}</h3>
                      <span className="text-sm font-semibold">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-skillblue h-2.5 rounded-full" 
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button className="flex items-center gap-2">
                  <PieChart className="h-4 w-4" /> Detailed Analysis
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Download Report
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" /> Industry Comparison
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Recommended Career Paths</h2>
              <p className="text-gray-600 mb-8">
                Based on your assessment, here are career paths that match your skills and interests:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careerPaths
                  .sort((a, b) => b.matchPercentage - a.matchPercentage)
                  .slice(0, 6)
                  .map((career) => (
                    <CareerCard 
                      key={career.id} 
                      career={career} 
                      onViewResources={() => handleViewResources(career.id)}
                    />
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Assessment;
