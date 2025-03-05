
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Server, Menu, X } from 'lucide-react';
import CartWidget from './CartWidget';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 text-xenoblack hover:text-xenoblue transition-colors"
        >
          <Server className="w-6 h-6 text-xenoblue" />
          <span className="text-xl font-bold">XenoHost</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className={`font-medium hover:text-xenoblue transition-colors ${
              location.pathname === '/' ? 'text-xenoblue' : 'text-xenoblack/80'
            }`}
          >
            Home
          </Link>
          <button 
            onClick={() => scrollToSection('pricing')}
            className="font-medium text-xenoblack/80 hover:text-xenoblue transition-colors bg-transparent border-none cursor-pointer"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-medium text-xenoblack/80 hover:text-xenoblue transition-colors bg-transparent border-none cursor-pointer"
          >
            Contact
          </button>
          
          <CartWidget />
          
          <Link 
            to="/checkout" 
            className="btn-primary py-2 hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <CartWidget />
          <button 
            className="text-xenoblack" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in-up">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className={`font-medium hover:text-xenoblue py-2 transition-colors ${
                location.pathname === '/' ? 'text-xenoblue' : 'text-xenoblack/80'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="font-medium text-xenoblack/80 hover:text-xenoblue py-2 transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="font-medium text-xenoblack/80 hover:text-xenoblue py-2 transition-colors bg-transparent border-none cursor-pointer text-left"
            >
              Contact
            </button>
            <Link 
              to="/checkout" 
              className="btn-primary text-center py-2 mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
