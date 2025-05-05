import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Calendar, Users, Filter, ChevronDown, Star } from 'lucide-react';
import Button from '../components/ui/Button';

// Types
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
  description: string;
  startDate?: string;
}

// Mock Data
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
    description: "Experience the best of Bali with this unforgettable 8-day adventure. Explore pristine beaches, ancient temples, and lush rice terraces.",
    startDate: "Jun 15, 2025",
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
    description: "Immerse yourself in Japanese culture with this comprehensive 10-day tour through Tokyo, Kyoto, and Osaka.",
    startDate: "May 10, 2025",
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
    description: "Explore the diverse ecosystems of Costa Rica, from rainforests to beaches, on this thrilling 7-day adventure tour.",
    startDate: "Jul 22, 2025",
  },
  {
    id: "paris-romance",
    title: "Romantic Paris Getaway",
    location: "Paris, France",
    duration: "5 days",
    rating: 4.6,
    reviewCount: 98,
    price: 1299,
    imageUrl: "https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Romantic", "Urban", "Cultural"],
    description: "Fall in love with the City of Light on this 5-day romantic getaway. Perfect for couples looking to experience the magic of Paris.",
    startDate: "Aug 5, 2025",
  },
  {
    id: "egyptian-wonders",
    title: "Egyptian Wonders",
    location: "Cairo, Luxor, Aswan",
    duration: "9 days",
    rating: 4.8,
    reviewCount: 65,
    price: 1899,
    imageUrl: "https://images.pexels.com/photos/3290075/pexels-photo-3290075.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Historical", "Cultural", "Adventure"],
    description: "Journey through time with this 9-day exploration of ancient Egypt. Visit the pyramids, cruise the Nile, and discover ancient temples.",
    startDate: "Sep 12, 2025",
  },
  {
    id: "new-zealand-adventure",
    title: "New Zealand Adventure",
    location: "Auckland, Queenstown, Rotorua",
    duration: "12 days",
    rating: 4.9,
    reviewCount: 42,
    price: 2899,
    discount: 3299,
    imageUrl: "https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Adventure", "Nature", "Active"],
    description: "Experience the stunning landscapes and adrenaline-pumping activities of New Zealand on this 12-day adventure tour.",
    startDate: "Oct 8, 2025",
  },
];

// All possible tags from the packages data
const allTags = Array.from(new Set(packages.flatMap(pkg => pkg.tags)));

const PackagesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [showFilters, setShowFilters] = useState(false);

  // Filter packages based on search term and filters
  const filteredPackages = packages.filter(pkg => {
    // Search term filter
    const matchesSearch = searchTerm === '' || 
      pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      pkg.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Tags filter
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => pkg.tags.includes(tag));
    
    // Price range filter
    const price = pkg.price;
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    return matchesSearch && matchesTags && matchesPrice;
  });

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setPriceRange([0, 5000]);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Page Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Travel Packages</h1>
          <p className="text-blue-100 max-w-2xl">
            Discover our carefully crafted travel packages designed to create unforgettable experiences. 
            From adventurous escapes to relaxing getaways, find the perfect trip for you.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search destinations, packages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <Button 
              variant="outline" 
              className="md:w-auto w-full flex items-center" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} className="mr-2" />
              Filters
              <ChevronDown 
                size={18} 
                className={`ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} 
              />
            </Button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Travel Type</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`px-3 py-1 rounded-full text-sm border ${
                          selectedTags.includes(tag)
                            ? 'bg-blue-100 border-blue-300 text-blue-800'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-700 mb-3">Price Range</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex items-end">
                  <Button 
                    variant="outline" 
                    className="text-gray-600 w-full" 
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        <div className="mb-8">
          <p className="text-gray-600 mb-4">Showing {filteredPackages.length} packages</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredPackages.map(pkg => (
              <PackageCard key={pkg.id} travelPackage={pkg} />
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No packages found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const PackageCard: React.FC<{ travelPackage: TravelPackage }> = ({ travelPackage }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:flex-row">
      <div className="md:w-2/5 relative">
        {travelPackage.discount && (
          <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold py-1 px-3 rounded-full">
            Sale
          </div>
        )}
        <img 
          src={travelPackage.imageUrl} 
          alt={travelPackage.title} 
          className="w-full h-full object-cover min-h-[200px]"
        />
      </div>
      
      <div className="p-5 md:w-3/5 flex flex-col">
        <div className="mb-2">
          <div className="flex flex-wrap gap-2 mb-2">
            {travelPackage.tags.map((tag, index) => (
              <span 
                key={index} 
                className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-gray-800">{travelPackage.title}</h3>
          
          <div className="flex items-center text-gray-500 mt-1 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{travelPackage.location}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4">{travelPackage.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{travelPackage.duration}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-1" />
            <span className="text-sm">{travelPackage.startDate || 'Flexible dates'}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm">{travelPackage.rating} ({travelPackage.reviewCount} reviews)</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="h-4 w-4 mr-1" />
            <span className="text-sm">Group tour</span>
          </div>
        </div>
        
        <div className="mt-auto flex justify-between items-end">
          <div>
            {travelPackage.discount ? (
              <div className="flex items-baseline">
                <span className="text-gray-400 line-through text-sm mr-2">${travelPackage.discount}</span>
                <span className="text-blue-600 font-bold text-xl">${travelPackage.price}</span>
                <span className="text-gray-500 text-sm ml-1">/person</span>
              </div>
            ) : (
              <div>
                <span className="text-blue-600 font-bold text-xl">${travelPackage.price}</span>
                <span className="text-gray-500 text-sm ml-1">/person</span>
              </div>
            )}
          </div>
          <Link to={`/packages/${travelPackage.id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PackagesPage;