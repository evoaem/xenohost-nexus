
import { useState, useEffect } from 'react';
import { Server, Cpu, Database } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 rounded-full bg-xenoblue/20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/6 w-80 h-80 rounded-full bg-xenoblue/10 filter blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
          {/* Hero Text */}
          <div className={`max-w-2xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block px-3 py-1 mb-6 bg-xenoblue/10 text-xenoblue rounded-full text-sm font-medium animate-fade-in">
              High-Performance Virtual Private Servers
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              <h1 className="font-bold text-xenoblack animate-fade-in-up">
                Powerful VPS Hosting for Your Digital <span className="text-xenoblue">Infrastructure</span>
              </h1>
              <div className="relative w-full md:w-32 h-24 rounded-lg overflow-hidden animate-fade-in-up shadow-lg border border-xenoblue/20" style={{animationDelay: "150ms"}}>
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://cdn.pixabay.com/vimeo/414364927/server-39517.mp4?width=640&hash=9d8bca68ca7720c25cf46efcd42d2e17ddfb05ea" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-xenoblue/10 backdrop-blur-sm"></div>
              </div>
            </div>
            <p className="text-lg md:text-xl text-xenoblack/70 mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: "200ms"}}>
              Experience lightning-fast performance with our premium VPS solutions. 
              Optimized for speed, stability, and security at unbeatable prices.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{animationDelay: "300ms"}}>
              <a href="#pricing" className="btn-primary hover:scale-105 transition-transform duration-300">
                View Plans
              </a>
              <a href="#contact" className="px-6 py-3 rounded-lg border border-xenoblue/30 text-xenoblue font-medium hover:bg-xenoblue/5 transition-colors hover:scale-105 transition-transform duration-300">
                Contact Us
              </a>
            </div>
            
            {/* Feature Highlights */}
            <div className="mt-12 grid grid-cols-3 gap-6 animate-fade-in-up" style={{animationDelay: "400ms"}}>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <div className="bg-xenoblue/10 p-3 rounded-full text-xenoblue mb-3">
                  <Cpu size={20} />
                </div>
                <span className="text-sm text-center text-xenoblack/80">High-Core CPUs</span>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <div className="bg-xenoblue/10 p-3 rounded-full text-xenoblue mb-3">
                  <Database size={20} />
                </div>
                <span className="text-sm text-center text-xenoblack/80">Fast SSD Storage</span>
              </div>
              <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
                <div className="bg-xenoblue/10 p-3 rounded-full text-xenoblue mb-3">
                  <Server size={20} />
                </div>
                <span className="text-sm text-center text-xenoblack/80">Abundant RAM</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative flex-1 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-xenoblue/20 to-xenoblue-light/10 rounded-3xl transform rotate-6 animate-float"></div>
              <div className="absolute inset-0 glass-card rounded-3xl shadow-xl overflow-hidden border border-white/40 hover:shadow-2xl hover:border-xenoblue/30 transition-all duration-500">
                <div className="absolute top-0 left-0 right-0 h-12 bg-xenoblack/5 flex items-center px-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="pt-16 px-8 pb-8">
                  <div className="bg-xenoblack/5 rounded-lg p-4 mb-4">
                    <div className="h-2 w-3/4 bg-xenoblue/20 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-xenoblue/20 rounded-full"></div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-xenoblue/20"></div>
                    <div className="flex-1">
                      <div className="h-2 w-full bg-xenoblack/10 rounded-full mb-2"></div>
                      <div className="h-2 w-2/3 bg-xenoblack/10 rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-xenoblack/5 rounded-lg p-4 mb-4">
                    <div className="h-2 w-full bg-xenoblue/20 rounded-full mb-2"></div>
                    <div className="h-2 w-3/4 bg-xenoblue/20 rounded-full mb-2"></div>
                    <div className="h-2 w-1/2 bg-xenoblue/20 rounded-full"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="h-8 w-24 rounded-lg bg-xenoblue/30"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
