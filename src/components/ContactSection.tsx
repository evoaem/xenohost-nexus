
import { Mail, Server, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-xenoblue/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 bg-xenoblue/10 text-xenoblue rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="mb-6">We're Here to Help You</h2>
          <p className="text-lg text-xenoblack/70">
            Have questions about our VPS offerings or need technical assistance? 
            Our team is ready to provide the support you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Contact */}
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-xenoblue/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-xenoblue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email Support</h3>
            <p className="text-xenoblack/70 mb-4">
              Send us an email anytime for support or inquiries.
            </p>
            <a 
              href="mailto:xenohoster@gmail.com" 
              className="text-xenoblue font-medium hover:text-xenoblue-dark transition-colors"
            >
              xenohoster@gmail.com
            </a>
          </div>
          
          {/* Discord */}
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-xenoblue/10 flex items-center justify-center">
              <MessageSquare className="w-8 h-8 text-xenoblue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Discord Community</h3>
            <p className="text-xenoblack/70 mb-4">
              Join our Discord server for real-time support and community.
            </p>
            <a 
              href="https://discord.gg/vUzqTgC82s" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xenoblue font-medium hover:text-xenoblue-dark transition-colors"
            >
              Join Our Discord
            </a>
          </div>
          
          {/* Technical Support */}
          <div className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-xenoblue/10 flex items-center justify-center">
              <Server className="w-8 h-8 text-xenoblue" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
            <p className="text-xenoblack/70 mb-4">
              24/7 technical assistance for all your server needs.
            </p>
            <p className="text-xenoblue font-medium">
              Available via Discord & Email
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold mb-6">Ready to Get Started?</h3>
          <a href="#pricing" className="btn-primary inline-block">
            Choose Your Plan
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
