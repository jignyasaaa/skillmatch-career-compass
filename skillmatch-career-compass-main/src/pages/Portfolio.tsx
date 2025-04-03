
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PortfolioBuilder from '@/components/portfolio/PortfolioBuilder';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, FileText, Video, Upload, UserPlus } from 'lucide-react';
import PortfolioQuestions from '@/components/portfolio/PortfolioQuestions';
import VideoRecorder from '@/components/portfolio/VideoRecorder';
import PortfolioExport from '@/components/portfolio/PortfolioExport';
import SignInOptions from '@/components/auth/SignInOptions';

const Portfolio = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-skillpurple-light/30 to-white pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Portfolio Builder</h1>
              <p className="text-gray-600 max-w-2xl">
                Create a professional portfolio to showcase your skills, projects, and experience to potential employers.
              </p>
            </div>
            {!isSignedIn ? (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Sign In
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Sign In to Save Your Portfolio</DialogTitle>
                  </DialogHeader>
                  <SignInOptions onSignIn={handleSignIn} />
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Progress
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Export PDF
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <PortfolioExport />
                  </DialogContent>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="builder" className="w-full">
          <TabsList className="mb-8 grid grid-cols-3 w-full md:w-auto">
            <TabsTrigger value="builder">Portfolio Builder</TabsTrigger>
            <TabsTrigger value="questions">Skill Questions</TabsTrigger>
            <TabsTrigger value="video">Video Introduction</TabsTrigger>
          </TabsList>
          
          <TabsContent value="builder">
            <PortfolioBuilder />
          </TabsContent>
          
          <TabsContent value="questions">
            <PortfolioQuestions />
          </TabsContent>
          
          <TabsContent value="video">
            <VideoRecorder />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Portfolio;
