
import { Link } from 'react-router-dom';
import { BarChart2, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart2 className="h-8 w-8 text-skillblue" />
              <span className="font-bold text-xl gradient-text">SkillMatch</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs">
              Empowering your career journey with personalized skill insights and portfolio building tools.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-skillblue">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-skillblue">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-skillblue">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-3">
              <li><Link to="/assessment" className="text-gray-600 hover:text-skillblue text-sm">Skill Assessment</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 hover:text-skillblue text-sm">Portfolio Builder</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-skillblue text-sm">Learning Resources</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Career Recommendations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Blog</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Guides</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Career Insights</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Industry Reports</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Contact</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Privacy Policy</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-skillblue text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} SkillMatch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
