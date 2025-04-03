
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart2, 
  BookOpen, 
  Briefcase, 
  ChevronRight, 
  FileText, 
  Search, 
  TrendingUp, 
  User 
} from 'lucide-react';
import { testimonials } from '@/data/mockData';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-skillblue-light via-white to-skillpurple-light min-h-[70vh] flex items-center">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-skillblue-light text-skillblue-dark px-4 py-1.5 text-sm rounded-full">
                Discover Your Career Path
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Find Your Perfect <span className="gradient-text">Career Match</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-xl">
                Personalized career guidance powered by AI. Discover perfect-fit career paths based on your skills, interests, and market trends.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/assessment">
                  <Button className="btn-primary">
                    Take Skill Assessment <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button className="btn-outline">
                    Build Your Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative animate-fade-in lg:block">
              <img
                src="/placeholder.svg"
                alt="Career Guidance Illustration"
                className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 animate-slide-up">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Skills Match</p>
                  <p className="text-xs text-gray-500">92% match with Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="section-container">
          <h2 className="section-title">How SkillMatch Works</h2>
          <p className="section-subtitle">
            Our AI-powered platform analyzes your skills and preferences to provide personalized career guidance
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillblue/10 p-3 rounded-full w-fit mb-5">
                  <Search className="h-6 w-6 text-skillblue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skill Assessment</h3>
                <p className="text-gray-600">
                  Take our comprehensive assessment to identify your strengths, weaknesses, and potential career matches.
                </p>
                <Link to="/assessment" className="text-skillblue font-medium flex items-center mt-4 hover:underline">
                  Start Assessment <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillpurple/10 p-3 rounded-full w-fit mb-5">
                  <Briefcase className="h-6 w-6 text-skillpurple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Recommendations</h3>
                <p className="text-gray-600">
                  Receive personalized career path suggestions that align with your skills, interests, and market demands.
                </p>
                <Link to="/assessment" className="text-skillpurple font-medium flex items-center mt-4 hover:underline">
                  Explore Careers <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillteal/10 p-3 rounded-full w-fit mb-5">
                  <BookOpen className="h-6 w-6 text-skillteal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Learning Resources</h3>
                <p className="text-gray-600">
                  Discover curated learning materials and courses tailored to help you develop the skills you need.
                </p>
                <Link to="/resources" className="text-skillteal font-medium flex items-center mt-4 hover:underline">
                  Browse Resources <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillblue/10 p-3 rounded-full w-fit mb-5">
                  <User className="h-6 w-6 text-skillblue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Portfolio Builder</h3>
                <p className="text-gray-600">
                  Create a professional portfolio to showcase your skills and projects to potential employers.
                </p>
                <Link to="/portfolio" className="text-skillblue font-medium flex items-center mt-4 hover:underline">
                  Build Portfolio <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillpurple/10 p-3 rounded-full w-fit mb-5">
                  <BarChart2 className="h-6 w-6 text-skillpurple" />
                </div>
                <h3 className="text-xl font-bold mb-3">Skill Analytics</h3>
                <p className="text-gray-600">
                  Visualize your skill profile and understand how your abilities compare to industry standards.
                </p>
                <Link to="/assessment" className="text-skillpurple font-medium flex items-center mt-4 hover:underline">
                  View Analytics <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardContent className="pt-6">
                <div className="bg-skillteal/10 p-3 rounded-full w-fit mb-5">
                  <FileText className="h-6 w-6 text-skillteal" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Insights</h3>
                <p className="text-gray-600">
                  Access up-to-date information on salary trends, job growth, and required skills for various careers.
                </p>
                <Link to="/resources" className="text-skillteal font-medium flex items-center mt-4 hover:underline">
                  Read Insights <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">
            See how SkillMatch has helped professionals achieve their career goals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="skill-card">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-skillblue to-skillpurple py-20 text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Career Match?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Take our skill assessment today and discover career paths that align with your unique abilities and interests.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/assessment">
              <Button className="bg-white text-skillblue hover:bg-gray-100 font-medium py-2.5 px-8 rounded-lg 
                transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg">
                Get Started Now <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/resources">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium py-2.5 px-8 rounded-lg 
                transition-all flex items-center gap-2 text-lg">
                Explore Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
