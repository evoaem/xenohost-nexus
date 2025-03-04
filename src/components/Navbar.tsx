
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
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
            className="font-medium text-xenoblack/80 hover:text-xenoblue transition-colors"
          >
            Home
          </Link>
          <a 
            href="#pricing" 
            className="font-medium text-xenoblack/80 hover:text-xenoblue transition-colors"
          >
            Pricing
          </a>
          <a 
            href="#contact" 
            className="font-medium text-xenoblack/80 hover:text-xenoblue transition-colors"
          >
            Contact
          </a>
          <Link 
            to="/checkout" 
            className="btn-primary py-2"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xenoblack" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in-up">
          <div className="container-custom py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="font-medium text-xenoblack/80 hover:text-xenoblue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#pricing" 
              className="font-medium text-xenoblack/80 hover:text-xenoblue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="font-medium text-xenoblack/80 hover:text-xenoblue py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
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
