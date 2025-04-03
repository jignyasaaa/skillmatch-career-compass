
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { FileText, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const PortfolioExport = () => {
  const [sections, setSections] = useState({
    personalInfo: true,
    skills: true,
    experience: true,
    education: true,
    projects: true,
    questions: true,
    videoLink: false
  });
  
  const [isExporting, setIsExporting] = useState(false);
  const { toast } = useToast();
  
  const handleExport = () => {
    setIsExporting(true);
    
    // Simulate PDF generation
    setTimeout(() => {
      setIsExporting(false);
      
      toast({
        title: "Portfolio Exported",
        description: "Your portfolio has been exported as a PDF.",
      });
      
      // This would normally trigger an actual PDF download, but for now we'll just console log
      console.log('Exporting portfolio with sections:', sections);
      
      // Simulate a download by creating a fake PDF link
      const link = document.createElement('a');
      link.href = 'data:application/pdf;charset=utf-8,';
      link.download = 'portfolio.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 2000);
  };
  
  const toggleSection = (section: keyof typeof sections) => {
    setSections({
      ...sections,
      [section]: !sections[section]
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <FileText className="h-12 w-12 mx-auto mb-2 text-skillblue" />
        <h3 className="text-xl font-semibold">Export Portfolio to PDF</h3>
        <p className="text-sm text-gray-600 mt-1">
          Select which sections to include in your exported portfolio
        </p>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            {Object.entries(sections).map(([key, value]) => (
              <div key={key} className="flex items-center space-x-2">
                <Checkbox 
                  id={key} 
                  checked={value} 
                  onCheckedChange={() => toggleSection(key as keyof typeof sections)} 
                />
                <Label htmlFor={key} className="capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button 
          onClick={handleExport} 
          disabled={isExporting || Object.values(sections).every(v => !v)}
          className="w-full"
        >
          {isExporting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating PDF...
            </>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" /> Export to PDF
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PortfolioExport;
