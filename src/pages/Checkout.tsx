
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ChevronLeft, MessageSquare } from 'lucide-react';

const Checkout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen pt-24 pb-16 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container-custom">
        <Link to="/" className="inline-flex items-center gap-2 text-xenoblue mb-8 hover:text-xenoblue-dark transition-colors">
          <ChevronLeft size={20} />
          <span>Back to Home</span>
        </Link>
        
        <div className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Choosing XenoHost!</h1>
          
          <p className="text-lg text-xenoblack/70 mb-8">
            To complete your VPS setup, please join our Discord server. Our team will assist you with the final configuration and payment processing.
          </p>
          
          <a 
            href="https://discord.gg/vUzqTgC82s" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-indigo-700 shadow-lg hover:shadow-indigo-500/20"
          >
            <MessageSquare size={24} />
            <span>Join Our Discord</span>
          </a>
          
          <div className="mt-10 pt-10 border-t border-xenoblack/10">
            <h3 className="text-xl font-semibold mb-4">What happens next?</h3>
            
            <ol className="text-left space-y-4 max-w-md mx-auto">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-xenoblue/10 text-xenoblue flex items-center justify-center font-medium">1</div>
                <div>
                  <p className="font-medium">Join Discord</p>
                  <p className="text-sm text-xenoblack/70">Click the button above to join our Discord server</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-xenoblue/10 text-xenoblue flex items-center justify-center font-medium">2</div>
                <div>
                  <p className="font-medium">Confirm Your Order</p>
                  <p className="text-sm text-xenoblack/70">Tell our team which plan you're interested in</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-xenoblue/10 text-xenoblue flex items-center justify-center font-medium">3</div>
                <div>
                  <p className="font-medium">Complete Payment</p>
                  <p className="text-sm text-xenoblack/70">Our team will guide you through the payment process</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-xenoblue/10 text-xenoblue flex items-center justify-center font-medium">4</div>
                <div>
                  <p className="font-medium">Get Your VPS</p>
                  <p className="text-sm text-xenoblack/70">We'll set up your server and provide login details</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="mt-10 text-xenoblack/70">
            <p>Need help? Contact us at <a href="mailto:xenohoster@gmail.com" className="text-xenoblue hover:underline">xenohoster@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
