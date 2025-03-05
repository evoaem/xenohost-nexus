
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
            <h1 className="font-bold text-xenoblack mb-6 animate-fade-in-up">
              Powerful VPS Hosting for Your Digital <span className="text-xenoblue">Infrastructure</span>
            </h1>
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
          
          {/* Hero Animation */}
          <div className={`relative flex-1 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-xenoblue/20">
                <div className="absolute top-0 left-0 right-0 h-8 bg-[#f0f0f0] flex items-center px-4 z-10">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff605c]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd44]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#00ca4e]"></div>
                  </div>
                </div>
                <video 
                  className="w-full aspect-video object-cover"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://cdn.pixabay.com/vimeo/491374885/code-68217.mp4?width=1280&hash=5e3e9595ae9c7e21a02b5b5aac8c48f4765822bc" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
