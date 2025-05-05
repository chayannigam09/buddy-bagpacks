import React, { useState } from 'react';
import { Calendar, Map, Users } from 'lucide-react';
import Button from '../ui/Button';

interface SearchFormData {
  destination: string;
  dates: string;
  travelers: string;
}

const HeroSection: React.FC = () => {
  const [searchData, setSearchData] = useState<SearchFormData>({
    destination: '',
    dates: '',
    travelers: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search data:', searchData);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
          Explore the World <br />
          <span className="text-blue-400">One Journey at a Time</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
          Discover breathtaking destinations and create unforgettable memories with our expertly curated travel experiences.
        </p>

        {/* Search Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <label htmlFor="destination" className="block text-sm font-medium text-left mb-1">Destination</label>
              <div className="relative">
                <Map className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={searchData.destination}
                  onChange={handleInputChange}
                  placeholder="Where do you want to go?"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-gray-300/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="dates" className="block text-sm font-medium text-left mb-1">Travel Dates</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                <input
                  type="date"
                  id="dates"
                  name="dates"
                  value={searchData.dates}
                  onChange={handleInputChange}
                  placeholder="When are you traveling?"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-gray-300/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="relative">
              <label htmlFor="travelers" className="block text-sm font-medium text-left mb-1">Travelers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300" size={20} />
                <input
                  type="number"
                  id="travelers"
                  name="travelers"
                  value={searchData.travelers}
                  onChange={handleInputChange}
                  placeholder="How many people?"
                  className="w-full pl-10 pr-3 py-3 bg-white/10 border border-gray-300/30 rounded-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="md:col-span-3 mt-2">
              <Button 
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md transition-colors"
              >
                Search Destinations
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;