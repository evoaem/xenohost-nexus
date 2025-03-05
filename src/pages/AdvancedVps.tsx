
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Server, HardDrive, Cpu, Globe, ShoppingCart } from 'lucide-react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from '../hooks/useCart';

interface VpsOption {
  id: string;
  name: string;
  price: number;
  cpu: number;
  ram: number;
  storage: number;
  category: 'budget' | 'standard' | 'performance';
}

const AdvancedVps = () => {
  const [selectedCategory, setSelectedCategory] = useState<'budget' | 'standard' | 'performance'>('budget');
  const [animateCards, setAnimateCards] = useState(false);
  const { addToCart } = useCart();
  
  useEffect(() => {
    // Reset animation when category changes
    setAnimateCards(false);
    const timer = setTimeout(() => setAnimateCards(true), 100);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const vpsOptions: VpsOption[] = [
    { id: 'xs', name: 'Extra Small', price: 2.5, cpu: 2, ram: 2, storage: 30, category: 'budget' },
    { id: 's', name: 'Small', price: 3, cpu: 4, ram: 4, storage: 60, category: 'budget' },
    { id: 'm', name: 'Medium', price: 4, cpu: 6, ram: 8, storage: 80, category: 'budget' },
    { id: 'xm', name: 'Extra Medium', price: 7, cpu: 8, ram: 16, storage: 125, category: 'standard' },
    { id: 'l', name: 'Large', price: 10, cpu: 12, ram: 32, storage: 170, category: 'standard' },
    { id: 'xl', name: 'Extra Large', price: 12, cpu: 16, ram: 48, storage: 235, category: 'performance' },
    { id: 'xxl', name: 'Super Large', price: 14, cpu: 20, ram: 64, storage: 275, category: 'performance' },
    { id: 'massive', name: 'Massive', price: 16, cpu: 28, ram: 72, storage: 300, category: 'performance' },
  ];

  const filteredOptions = selectedCategory === 'budget' 
    ? vpsOptions.filter(option => option.category === 'budget')
    : selectedCategory === 'standard'
    ? vpsOptions.filter(option => option.category === 'standard')
    : vpsOptions.filter(option => option.category === 'performance');

  return (
    <div className="min-h-screen bg-xenowhite">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 bg-xenoblue/10 text-xenoblue rounded-full text-sm font-medium">
              Advanced VPS Options
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Find Your Perfect VPS Configuration</h1>
            <p className="text-lg text-xenoblack/70">
              From budget-friendly starter options to high-performance dedicated servers, 
              we have the right solution for every workload and budget.
            </p>
          </div>
          
          {/* Category Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory('budget')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'budget'
                  ? 'bg-xenoblue text-white shadow-lg'
                  : 'bg-white text-xenoblack/70 border border-xenoblack/10 hover:bg-xenoblue/5'
              }`}
            >
              Budget-Friendly
            </button>
            <button
              onClick={() => setSelectedCategory('standard')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'standard'
                  ? 'bg-xenoblue text-white shadow-lg'
                  : 'bg-white text-xenoblack/70 border border-xenoblack/10 hover:bg-xenoblue/5'
              }`}
            >
              Standard Performance
            </button>
            <button
              onClick={() => setSelectedCategory('performance')}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === 'performance'
                  ? 'bg-xenoblue text-white shadow-lg'
                  : 'bg-white text-xenoblack/70 border border-xenoblack/10 hover:bg-xenoblue/5'
              }`}
            >
              High Performance
            </button>
          </div>
          
          {/* VPS Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredOptions.map((option, index) => (
              <div 
                key={option.id}
                className={`bg-white rounded-xl shadow-lg border border-xenoblack/5 p-6 hover:shadow-xl transition-all duration-500 ${
                  animateCards 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{option.name}</h3>
                  <div className="bg-xenoblue/10 text-xenoblue text-xs font-medium px-2 py-1 rounded-full">
                    ${option.price}/mo
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-xenoblue flex-shrink-0" />
                    <span className="font-medium">{option.cpu} vCores</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Server className="w-5 h-5 text-xenoblue flex-shrink-0" />
                    <span className="font-medium">{option.ram} GB RAM</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <HardDrive className="w-5 h-5 text-xenoblue flex-shrink-0" />
                    <span className="font-medium">{option.storage} GB SSD</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-xenoblue flex-shrink-0" />
                    <span className="font-medium">Dedicated IPv4</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm">DDoS Protection</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => addToCart(option)}
                  className="w-full py-2 px-4 rounded-lg bg-xenoblue text-white font-medium text-center block hover:bg-xenoblue-dark transition-colors hover:scale-105 duration-300 flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          
          {/* Return Link */}
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xenoblue hover:underline"
            >
              &larr; Back to main plans
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdvancedVps;
