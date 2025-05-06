import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, User } from 'lucide-react';
// import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotHomePage, setIsNotHomePage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if(location.pathname !== '/') {
      setIsNotHomePage(true);
    } else {
      setIsNotHomePage(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/10 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Globe className={`h-8 w-8 ${isScrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
              TravelScript
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks isScrolled={isScrolled} />
            {/* <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className={`border ${isScrolled ? 'border-gray-300 text-gray-700' : 'border-white text-white'}`}
              >
                Sign In
              </Button>
              <Button 
                variant={isScrolled ? 'primary' : 'ghost'} 
                className={!isScrolled ? 'bg-white text-blue-600 hover:bg-gray-100' : ''}
              >
                Sign Up
              </Button>
            </div> */}
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col py-4 px-4 space-y-2">
            <NavLinksMobile />
            <div className="pt-4 flex flex-col space-y-3">
              {/* <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button variant="primary" className="w-full">
                Sign Up
              </Button> */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLinks: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  const linkClasses = isScrolled ? 'text-white hover:text-blue-600' : 'text-white hover:text-gray-200';
  
  return (
    <>
      <Link to="/" className={`${linkClasses} font-medium`}>Home</Link>
      <Link to="/destinations" className={`${linkClasses} font-medium`}>Destinations</Link>
      <Link to="/packages" className={`${linkClasses} font-medium`}>Packages</Link>
      <Link to="/about" className={`${linkClasses} font-medium`}>About</Link>
      <Link to="/contact" className={`${linkClasses} font-medium`}>Contact</Link>
    </>
  );
};

const NavLinksMobile: React.FC = () => {
  return (
    <>
      <Link to="/" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Home</Link>
      <Link to="/destinations" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Destinations</Link>
      <Link to="/packages" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Packages</Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 py-2 font-medium">About</Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</Link>
    </>
  );
};

export default Header;