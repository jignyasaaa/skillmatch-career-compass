import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, User, BookOpen, Layout, BarChart2, Share2, Download } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";
import { toast } from "@/hooks/use-toast";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = "SkillMatch - Find Your Perfect Career Match";
    
    let shareUrl = '';
    
    switch(platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url)
          .then(() => {
            toast({
              title: "Link Copied!",
              description: "The link has been copied to your clipboard.",
            });
          })
          .catch(() => {
            toast({
              title: "Copy Failed",
              description: "Failed to copy the link. Please try again.",
              variant: "destructive",
            });
          });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
  };

  const handleDownload = () => {
    toast({
      title: "Downloading...",
      description: "Your code is being prepared for download.",
    });
    
    const files = {
      'README.md': '# SkillMatch\n\nA web application to match your skills with career opportunities.\n\n## Features\n\n- Skill Assessment\n- Portfolio Builder\n- Learning Resources',
      'index.html': '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>SkillMatch</title>\n</head>\n<body>\n  <div id="root"></div>\n  <script src="./src/main.tsx" type="module"></script>\n</body>\n</html>',
      'src/App.tsx': 'import React from "react";\nimport { BrowserRouter, Routes, Route } from "react-router-dom";\nimport Layout from "./components/layout/Layout";\nimport Index from "./pages/Index";\nimport Assessment from "./pages/Assessment";\nimport Portfolio from "./pages/Portfolio";\nimport Resources from "./pages/Resources";\nimport NotFound from "./pages/NotFound";\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <Routes>\n        <Route path="/" element={<Layout />}>\n          <Route index element={<Index />} />\n          <Route path="assessment" element={<Assessment />} />\n          <Route path="portfolio" element={<Portfolio />} />\n          <Route path="resources" element={<Resources />} />\n          <Route path="*" element={<NotFound />} />\n        </Route>\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\nexport default App;',
      'src/components/layout/NavBar.tsx': 'import { useState } from "react";\nimport { Link } from "react-router-dom";\n// Navigation component implementation',
      'package.json': '{\n  "name": "skillmatch",\n  "version": "1.0.0",\n  "description": "A web application to match your skills with career opportunities",\n  "dependencies": {\n    "react": "^18.3.1",\n    "react-dom": "^18.3.1",\n    "react-router-dom": "^6.26.2"\n  }\n}'
    };
    
    const zip = new Blob(
      [
        Object.entries(files).map(([filename, content]) => {
          return `--- ${filename} ---\n${content}\n\n`;
        }).join('')
      ], 
      { type: 'application/zip' }
    );
    
    const url = URL.createObjectURL(zip);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'skillmatch-code.zip';
    document.body.appendChild(a);
    a.click();
    
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    toast({
      title: "Download Complete",
      description: "Your code has been downloaded successfully.",
    });
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BarChart2 className="h-8 w-8 text-skillblue" />
          <span className="font-bold text-xl gradient-text">SkillMatch</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/assessment" className="text-gray-700 hover:text-skillblue flex items-center gap-1.5">
            <Layout className="h-4 w-4" />
            <span>Skill Assessment</span>
          </Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-skillblue flex items-center gap-1.5">
            <User className="h-4 w-4" />
            <span>Portfolio Builder</span>
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-skillblue flex items-center gap-1.5">
            <BookOpen className="h-4 w-4" />
            <span>Learning Resources</span>
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="flex items-center gap-1.5">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleShare('twitter')}>
                Share on Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('facebook')}>
                Share on Facebook
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                Share on LinkedIn
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare('copy')}>
                Copy Link
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleDownload} className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download as ZIP
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button className="btn-primary">Get Started</Button>
        </div>

        <button
          type="button"
          className="md:hidden p-2 rounded-md text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 p-4 bg-gray-50 rounded-lg">
          <Link 
            to="/assessment"
            className="block text-gray-700 hover:text-skillblue py-2 px-3 rounded-md flex items-center gap-2"
            onClick={toggleMenu}
          >
            <Layout className="h-5 w-5" />
            <span>Skill Assessment</span>
          </Link>
          <Link 
            to="/portfolio" 
            className="block text-gray-700 hover:text-skillblue py-2 px-3 rounded-md flex items-center gap-2"
            onClick={toggleMenu}
          >
            <User className="h-5 w-5" />
            <span>Portfolio Builder</span>
          </Link>
          <Link 
            to="/resources" 
            className="block text-gray-700 hover:text-skillblue py-2 px-3 rounded-md flex items-center gap-2"
            onClick={toggleMenu}
          >
            <BookOpen className="h-5 w-5" />
            <span>Learning Resources</span>
          </Link>
          
          <div className="block text-gray-700 hover:text-skillblue py-2 px-3 rounded-md">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                  <Share2 className="h-5 w-5" />
                  <span>Share</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleShare('twitter')}>
                  Share on Twitter
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('facebook')}>
                  Share on Facebook
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('linkedin')}>
                  Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleShare('copy')}>
                  Copy Link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleDownload} className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download as ZIP
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <Button className="w-full btn-primary" onClick={toggleMenu}>
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
