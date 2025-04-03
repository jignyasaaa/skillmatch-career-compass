
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Trash2, Save, Download, Eye } from 'lucide-react';

interface ProjectType {
  id: string;
  title: string;
  description: string;
  skills: string[];
  link: string;
}

interface ExperienceType {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

interface EducationType {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

const PortfolioBuilder = () => {
  const [profile, setProfile] = useState({
    name: '',
    title: '',
    summary: '',
    email: '',
    website: '',
    location: '',
  });
  
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [education, setEducation] = useState<EducationType[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  
  // Handlers for profile
  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };
  
  // Handlers for projects
  const addProject = () => {
    const newProject: ProjectType = {
      id: Date.now().toString(),
      title: '',
      description: '',
      skills: [],
      link: '',
    };
    setProjects([...projects, newProject]);
  };
  
  const updateProject = (id: string, field: keyof ProjectType, value: string | string[]) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };
  
  const removeProject = (id: string) => {
    setProjects(projects.filter(project => project.id !== id));
  };
  
  // Handlers for experiences
  const addExperience = () => {
    const newExperience: ExperienceType = {
      id: Date.now().toString(),
      role: '',
      company: '',
      period: '',
      description: '',
    };
    setExperiences([...experiences, newExperience]);
  };
  
  const updateExperience = (id: string, field: keyof ExperienceType, value: string) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };
  
  const removeExperience = (id: string) => {
    setExperiences(experiences.filter(exp => exp.id !== id));
  };
  
  // Handlers for education
  const addEducation = () => {
    const newEducation: EducationType = {
      id: Date.now().toString(),
      degree: '',
      institution: '',
      year: '',
    };
    setEducation([...education, newEducation]);
  };
  
  const updateEducation = (id: string, field: keyof EducationType, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };
  
  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };
  
  // Handlers for skills
  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };
  
  const removeSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };
  
  // Save portfolio (just a placeholder for now)
  const savePortfolio = () => {
    const portfolio = {
      profile,
      projects,
      experiences,
      education,
      skills,
    };
    console.log('Saving portfolio:', portfolio);
    // Here you would typically send this to an API
    alert('Portfolio saved successfully!');
  };
  
  // Preview portfolio (just a placeholder for now)
  const previewPortfolio = () => {
    // This would typically open a modal or navigate to a preview page
    console.log('Previewing portfolio');
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Fill in your basic information for your portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={profile.name} 
                    onChange={handleProfileChange} 
                    placeholder="e.g. John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input 
                    id="title" 
                    name="title" 
                    value={profile.title} 
                    onChange={handleProfileChange} 
                    placeholder="e.g. Full Stack Developer"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={profile.email} 
                    onChange={handleProfileChange} 
                    placeholder="e.g. your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website/Portfolio URL</Label>
                  <Input 
                    id="website" 
                    name="website" 
                    value={profile.website} 
                    onChange={handleProfileChange} 
                    placeholder="e.g. https://yourportfolio.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    name="location" 
                    value={profile.location} 
                    onChange={handleProfileChange} 
                    placeholder="e.g. San Francisco, CA"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea 
                  id="summary" 
                  name="summary" 
                  value={profile.summary} 
                  onChange={handleProfileChange} 
                  placeholder="Write a brief summary about yourself..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Projects Tab */}
        <TabsContent value="projects">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Add your notable projects and portfolio pieces</CardDescription>
              </div>
              <Button onClick={addProject} className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Add Project
              </Button>
            </CardHeader>
            <CardContent>
              {projects.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>You haven't added any projects yet. Click "Add Project" to get started.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={project.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Project {index + 1}</h3>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => removeProject(project.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`project-title-${project.id}`}>Project Title</Label>
                          <Input 
                            id={`project-title-${project.id}`} 
                            value={project.title} 
                            onChange={e => updateProject(project.id, 'title', e.target.value)} 
                            placeholder="e.g. E-commerce Website"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`project-link-${project.id}`}>Project Link</Label>
                          <Input 
                            id={`project-link-${project.id}`} 
                            value={project.link} 
                            onChange={e => updateProject(project.id, 'link', e.target.value)} 
                            placeholder="e.g. https://github.com/yourproject"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`project-description-${project.id}`}>Description</Label>
                        <Textarea 
                          id={`project-description-${project.id}`} 
                          value={project.description} 
                          onChange={e => updateProject(project.id, 'description', e.target.value)} 
                          placeholder="Describe the project, your role, and technologies used..."
                          rows={3}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Experience Tab */}
        <TabsContent value="experience">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Add your professional work experience</CardDescription>
              </div>
              <Button onClick={addExperience} className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Add Experience
              </Button>
            </CardHeader>
            <CardContent>
              {experiences.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>You haven't added any work experiences yet. Click "Add Experience" to get started.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={exp.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Experience {index + 1}</h3>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => removeExperience(exp.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`exp-role-${exp.id}`}>Job Title</Label>
                          <Input 
                            id={`exp-role-${exp.id}`} 
                            value={exp.role} 
                            onChange={e => updateExperience(exp.id, 'role', e.target.value)} 
                            placeholder="e.g. Senior Developer"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`exp-company-${exp.id}`}>Company</Label>
                          <Input 
                            id={`exp-company-${exp.id}`} 
                            value={exp.company} 
                            onChange={e => updateExperience(exp.id, 'company', e.target.value)} 
                            placeholder="e.g. Google"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`exp-period-${exp.id}`}>Time Period</Label>
                        <Input 
                          id={`exp-period-${exp.id}`} 
                          value={exp.period} 
                          onChange={e => updateExperience(exp.id, 'period', e.target.value)} 
                          placeholder="e.g. Jan 2020 - Present"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`exp-description-${exp.id}`}>Description</Label>
                        <Textarea 
                          id={`exp-description-${exp.id}`} 
                          value={exp.description} 
                          onChange={e => updateExperience(exp.id, 'description', e.target.value)} 
                          placeholder="Describe your responsibilities and achievements..."
                          rows={3}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Education Tab */}
        <TabsContent value="education">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>Add your educational background</CardDescription>
              </div>
              <Button onClick={addEducation} className="flex items-center gap-1">
                <Plus className="h-4 w-4" /> Add Education
              </Button>
            </CardHeader>
            <CardContent>
              {education.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <p>You haven't added any education yet. Click "Add Education" to get started.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={edu.id} className="p-4 border rounded-lg space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">Education {index + 1}</h3>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => removeEducation(edu.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`edu-degree-${edu.id}`}>Degree/Certificate</Label>
                          <Input 
                            id={`edu-degree-${edu.id}`} 
                            value={edu.degree} 
                            onChange={e => updateEducation(edu.id, 'degree', e.target.value)} 
                            placeholder="e.g. Bachelor of Science in Computer Science"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`edu-institution-${edu.id}`}>Institution</Label>
                          <Input 
                            id={`edu-institution-${edu.id}`} 
                            value={edu.institution} 
                            onChange={e => updateEducation(edu.id, 'institution', e.target.value)} 
                            placeholder="e.g. Stanford University"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`edu-year-${edu.id}`}>Year</Label>
                        <Input 
                          id={`edu-year-${edu.id}`} 
                          value={edu.year} 
                          onChange={e => updateEducation(edu.id, 'year', e.target.value)} 
                          placeholder="e.g. 2018 - 2022"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Skills Tab */}
        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add technical and professional skills</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 mb-6">
                <Input 
                  value={newSkill} 
                  onChange={e => setNewSkill(e.target.value)} 
                  placeholder="Enter a skill (e.g. React.js, Project Management)" 
                  onKeyPress={e => e.key === 'Enter' && addSkill()}
                />
                <Button onClick={addSkill} className="flex-shrink-0">Add</Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.length === 0 ? (
                  <p className="text-gray-500">You haven't added any skills yet.</p>
                ) : (
                  skills.map((skill, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-100 py-1 px-3 rounded-full flex items-center gap-2"
                    >
                      <span>{skill}</span>
                      <button 
                        onClick={() => removeSkill(skill)} 
                        className="text-gray-500 hover:text-red-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="mt-8 flex gap-4 justify-end">
        <Button 
          onClick={previewPortfolio} 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <Eye className="h-4 w-4" /> Preview
        </Button>
        <Button 
          onClick={savePortfolio} 
          className="bg-skillblue hover:bg-skillblue-dark text-white flex items-center gap-2"
        >
          <Save className="h-4 w-4" /> Save Portfolio
        </Button>
        <Button 
          variant="outline" 
          className="flex items-center gap-2"
        >
          <Download className="h-4 w-4" /> Export as PDF
        </Button>
      </div>
    </div>
  );
};

export default PortfolioBuilder;
