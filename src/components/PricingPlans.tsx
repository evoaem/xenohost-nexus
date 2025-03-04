
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Server, HardDrive, Cpu } from 'lucide-react';

interface PlanProps {
  title: string;
  price: number;
  cpu: number;
  ram: number;
  storage: number;
  isPopular?: boolean;
  delay: number;
}

const Plan = ({ title, price, cpu, ram, storage, isPopular = false, delay }: PlanProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const planRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (planRef.current) {
      observer.observe(planRef.current);
    }

    return () => {
      if (planRef.current) {
        observer.unobserve(planRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={planRef}
      className={`glass-card rounded-2xl p-6 transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-12'
      } ${
        isPopular 
          ? 'border-xenoblue/30 ring-2 ring-xenoblue/20 shadow-lg shadow-xenoblue/10 scale-105 z-10' 
          : 'border-white/30'
      }`}
    >
      {isPopular && (
        <div className="bg-xenoblue text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <div className="mt-4 mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-xenoblack/60">/month</span>
      </div>
      
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-3">
          <Cpu className="w-5 h-5 text-xenoblue flex-shrink-0" />
          <div>
            <p className="font-medium">{cpu} vCores</p>
            <p className="text-sm text-xenoblack/60">High-performance CPU</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Server className="w-5 h-5 text-xenoblue flex-shrink-0" />
          <div>
            <p className="font-medium">{ram} GB RAM</p>
            <p className="text-sm text-xenoblack/60">DDR4 Memory</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <HardDrive className="w-5 h-5 text-xenoblue flex-shrink-0" />
          <div>
            <p className="font-medium">{storage} GB SSD</p>
            <p className="text-sm text-xenoblack/60">NVMe Storage</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-xenoblue" />
          <span className="text-sm">99.9% Uptime Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-xenoblue" />
          <span className="text-sm">24/7 Technical Support</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-xenoblue" />
          <span className="text-sm">DDoS Protection</span>
        </div>
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-xenoblue" />
          <span className="text-sm">Full Root Access</span>
        </div>
      </div>
      
      <Link 
        to="/checkout" 
        className={`w-full py-3 px-6 rounded-lg font-medium text-center block transition-all ${
          isPopular 
            ? 'bg-xenoblue text-white hover:bg-xenoblue-dark shadow-lg hover:shadow-xenoblue/20' 
            : 'bg-white text-xenoblack border border-xenoblack/10 hover:bg-xenoblue hover:text-white hover:border-transparent'
        }`}
      >
        Buy Now
      </Link>
    </div>
  );
};

const PricingPlans = () => {
  return (
    <section id="pricing" className="section relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 bg-xenoblue/10 text-xenoblue rounded-full text-sm font-medium">
            Pricing Plans
          </div>
          <h2 className="mb-6">Choose the Perfect VPS Plan for Your Needs</h2>
          <p className="text-lg text-xenoblack/70">
            High-performance VPS hosting with dedicated resources at competitive prices. 
            Select the plan that matches your requirements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <Plan 
            title="Standard VPS" 
            price={7} 
            cpu={8} 
            ram={16} 
            storage={100}
            delay={0}
          />
          
          <Plan 
            title="Premium VPS" 
            price={10} 
            cpu={12} 
            ram={32} 
            storage={165}
            isPopular={true}
            delay={200}
          />
          
          <Plan 
            title="Business VPS" 
            price={14} 
            cpu={20} 
            ram={64} 
            storage={250}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
