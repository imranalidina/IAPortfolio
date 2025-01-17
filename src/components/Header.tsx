import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'Skills', to: 'skills' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
              <span className="sr-only">Imran Alidina</span>
              <span className="text-2xl font-bold text-gray-300">IMRAN</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-base font-medium text-gray-300 hover:text-blue-400 cursor-pointer nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-gray-300">IMRAN</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      smooth={true}
                      duration={500}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700 cursor-pointer"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="ml-3 text-base font-medium text-gray-300 hover:text-blue-400">{item.name}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;