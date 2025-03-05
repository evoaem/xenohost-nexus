
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Server, ArrowRight } from 'lucide-react';

const CustomVpsOptions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-white to-xenoblue/5 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className={`bg-white rounded-3xl shadow-xl border border-xenoblue/10 p-8 md:p-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want Less Price or More Powerful VPS?
              </h2>
              <p className="text-xenoblack/70 mb-6">
                Explore our extended range of VPS solutions, from budget-friendly options to enterprise-grade powerhouses. 
                All plans include dedicated IPv4 addresses and premium support.
              </p>
              <Link 
                to="/advanced-vps" 
                className="inline-flex items-center gap-2 btn-primary group"
              >
                View All Plans
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="relative flex-shrink-0">
              <div className="w-full md:w-72 h-72 bg-xenoblue/10 rounded-full absolute -bottom-36 -right-36 animate-pulse"></div>
              <div className="relative z-10 flex items-center justify-center w-32 h-32 mx-auto md:w-48 md:h-48 rounded-full bg-xenoblue/10 animate-float">
                <Server className="w-16 h-16 text-xenoblue" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomVpsOptions;
