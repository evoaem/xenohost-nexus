
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
          
          {/* Join Discord */}
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-5">Stay Updated with Discord</h4>
            <p className="text-white/70 text-sm mb-4">
              Join our Discord server to get the latest updates and support.
            </p>
            <a 
              href="https://discord.gg/vUzqTgC82s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg transition-all hover:bg-indigo-700 hover:scale-105"
            >
              <MessageSquare size={16} />
              <span>Join Discord</span>
            </a>
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
