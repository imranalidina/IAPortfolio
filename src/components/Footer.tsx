import React from 'react';
import { Link } from 'react-scroll';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-blue-400">IA</span>
            <p className="mt-2 text-sm text-gray-400">Crafting digital experiences and nurturing soccer talent.</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-6">
            <Link to="hero" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">About</Link>
            <Link to="skills" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Skills</Link>
            <Link to="portfolio" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Portfolio</Link>
            <Link to="testimonials" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Testimonials</Link>
            <Link to="contact" smooth={true} duration={500} className="hover:text-blue-400 cursor-pointer transition-colors duration-300">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2023 Imran Alidina. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Link 
              to="hero" 
              smooth={true} 
              duration={500} 
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-300 fixed bottom-8 right-8 z-50"
            >
              <ChevronUp className="w-6 h-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;