import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setEmail('');
      // In a real app, you'd send this to your API
    }
  };

  return (
    <section 
      className="py-20 bg-cover bg-center relative" 
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get Travel Inspiration & Special Offers</h2>
          <p className="text-blue-100 mb-8">
            Subscribe to our newsletter and be the first to know about new destinations, exclusive deals, and travel tips.
          </p>
          
          {isSubmitted ? (
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 animate-fade-in">
              <div className="text-green-300 text-xl mb-2">Thank You!</div>
              <p className="text-white">
                You've been successfully subscribed to our newsletter. Get ready for some amazing travel inspiration!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-grow px-4 py-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button
                type="submit"
                className="bg-blue-50 text-blue-600 hover:bg-blue-300"
              >
                Subscribe
                <Send size={18} className="ml-2" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;