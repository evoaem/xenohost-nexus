
import { Link } from 'react-router-dom';
import { Server, Mail, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-xenoblack text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <Server className="w-6 h-6 text-xenoblue" />
              <span className="text-xl font-bold">XenoHost</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Providing high-performance VPS solutions with dedicated resources at competitive prices.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:xenohoster@gmail.com" 
                className="text-white/70 hover:text-xenoblue transition-colors"
                aria-label="Email us"
              >
                <Mail size={20} />
              </a>
              <a 
                href="https://discord.gg/vUzqTgC82s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/70 hover:text-xenoblue transition-colors"
                aria-label="Join our Discord"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-white/70 hover:text-xenoblue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  className="text-white/70 hover:text-xenoblue transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-white/70 hover:text-xenoblue transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-xenoblue mt-0.5" />
                <a 
                  href="mailto:xenohoster@gmail.com" 
                  className="text-white/70 hover:text-xenoblue transition-colors"
                >
                  xenohoster@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MessageSquare className="w-5 h-5 text-xenoblue mt-0.5" />
                <a 
                  href="https://discord.gg/vUzqTgC82s" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/70 hover:text-xenoblue transition-colors"
                >
                  Join Discord Community
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5">Stay Updated</h4>
            <p className="text-white/70 text-sm mb-4">
              Get notified about new features and updates.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 pr-12 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-xenoblue/50 transition-all"
              />
              <button 
                type="button" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-xenoblue text-white p-1 rounded"
                aria-label="Subscribe"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} XenoHost. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
