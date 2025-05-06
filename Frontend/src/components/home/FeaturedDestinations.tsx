import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Destination {
  id: string;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
}

const destinations: Destination[] = [
  {
    id: "bali",
    title: "Tropical Paradise",
    location: "Bali, Indonesia",
    price: 1299,
    imageUrl: "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "santorini",
    title: "Mediterranean Dream",
    location: "Santorini, Greece",
    price: 1599,
    imageUrl: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "kyoto",
    title: "Cultural Experience",
    location: "Kyoto, Japan",
    price: 1499,
    imageUrl: "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "switzerland",
    title: "Alpine Adventure",
    location: "Swiss Alps, Switzerland",
    price: 1849,
    imageUrl: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

const FeaturedDestinations: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Destinations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of the most breathtaking and popular destinations around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/destinations" 
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
          >
            View all destinations
            <ChevronRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const DestinationCard: React.FC<{ destination: Destination }> = ({ destination }) => {
  return (
    <Link to={`/destinations/${destination.id}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-2">
        <div className="h-48 overflow-hidden relative">
          <img 
            src={destination.imageUrl} 
            alt={destination.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-semibold text-gray-800">{destination.title}</h3>
          <p className="text-gray-600 mb-3">{destination.location}</p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">
              ${destination.price}
              <span className="text-sm font-normal text-gray-500"> /person</span>
            </span>
            <span className="text-sm text-gray-500">7 days</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedDestinations;