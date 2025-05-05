import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Map, Heart, Star } from 'lucide-react';
import Button from '../ui/Button';

interface TravelPackage {
  id: string;
  title: string;
  location: string;
  duration: string;
  rating: number;
  reviewCount: number;
  price: number;
  discount?: number;
  imageUrl: string;
  tags: string[];
}

const packages: TravelPackage[] = [
  {
    id: "bali-adventure",
    title: "Ultimate Bali Adventure",
    location: "Bali, Indonesia",
    duration: "8 days",
    rating: 4.8,
    reviewCount: 124,
    price: 1299,
    discount: 1499,
    imageUrl: "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Beach", "Adventure", "Cultural"],
  },
  {
    id: "japan-explorer",
    title: "Japan Explorer",
    location: "Tokyo, Kyoto, Osaka",
    duration: "10 days",
    rating: 4.9,
    reviewCount: 89,
    price: 2199,
    imageUrl: "https://images.pexels.com/photos/5126796/pexels-photo-5126796.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Cultural", "Urban", "Foodie"],
  },
  {
    id: "costa-rica-adventure",
    title: "Costa Rica Adventure",
    location: "San José, Arenal, Manuel Antonio",
    duration: "7 days",
    rating: 4.7,
    reviewCount: 76,
    price: 1599,
    discount: 1899,
    imageUrl: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Adventure", "Nature", "Wildlife"],
  },
];

const PopularPackages: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Popular Travel Packages</h2>
            <p className="text-gray-600 max-w-2xl">
              Our most-loved travel experiences, carefully crafted to deliver unforgettable journeys at exceptional value.
            </p>
          </div>
          <Link to="/packages" className="mt-4 md:mt-0">
            <Button variant="outline">View All Packages</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} travelPackage={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PackageCard: React.FC<{ travelPackage: TravelPackage }> = ({ travelPackage }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="relative">
        {travelPackage.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
            Sale
          </div>
        )}
        <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </button>
        <img 
          src={travelPackage.imageUrl} 
          alt={travelPackage.title} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent">
          <div className="flex items-center text-white">
            <Map className="h-4 w-4 mr-1" />
            <span className="text-sm">{travelPackage.location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-gray-800">{travelPackage.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">{travelPackage.rating}</span>
            <span className="text-xs text-gray-500 ml-1">({travelPackage.reviewCount})</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Clock className="h-4 w-4 mr-1" />
          <span className="text-sm">{travelPackage.duration}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {travelPackage.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-end">
          <div>
            {travelPackage.discount ? (
              <div className="flex items-center">
                <span className="text-gray-400 line-through text-sm mr-2">${travelPackage.discount}</span>
                <span className="text-blue-600 font-bold text-xl">${travelPackage.price}</span>
              </div>
            ) : (
              <span className="text-blue-600 font-bold text-xl">${travelPackage.price}</span>
            )}
            <span className="text-gray-500 text-sm"> /person</span>
          </div>
          <Link to={`/packages/${travelPackage.id}`}>
            <Button size="sm">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;