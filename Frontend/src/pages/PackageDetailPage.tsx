import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, Users, Heart, Share2, Star, Check, ChevronRight, ChevronLeft } from 'lucide-react';
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
  gallery: string[];
  tags: string[];
  description: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
}

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  meals: string[];
  accommodation: string;
}

// Mock Data
const packageDetails: TravelPackage = {
  id: "bali-adventure",
  title: "Ultimate Bali Adventure",
  location: "Bali, Indonesia",
  duration: "8 days",
  rating: 4.8,
  reviewCount: 124,
  price: 1299,
  discount: 1499,
  imageUrl: "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=1200",
  gallery: [
    "https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800",
    "https://images.pexels.com/photos/5582867/pexels-photo-5582867.jpeg?auto=compress&cs=tinysrgb&w=800"
  ],
  tags: ["Beach", "Adventure", "Cultural"],
  description: "Experience the best of Bali with this unforgettable 8-day adventure. From pristine beaches to ancient temples and lush rice terraces, this package offers the perfect blend of relaxation, adventure, and cultural immersion. Our expert guides will take you to the most breathtaking spots on the island, while ensuring you have plenty of time to soak in the natural beauty and unique atmosphere of this tropical paradise.",
  highlights: [
    "Explore the sacred Monkey Forest Sanctuary in Ubud",
    "Visit the iconic Tanah Lot Temple at sunset",
    "Relax on the stunning beaches of Nusa Dua",
    "Trek through the scenic Tegallalang Rice Terraces",
    "Experience traditional Balinese ceremonies and dances",
    "Enjoy water sports activities in Tanjung Benoa"
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrival in Denpasar & Welcome Dinner",
      description: "Arrive at Ngurah Rai International Airport where our representative will meet you. Transfer to your hotel in Seminyak for check-in and relaxation. In the evening, enjoy a welcome dinner featuring traditional Balinese cuisine while watching a cultural performance.",
      meals: ["Dinner"],
      accommodation: "Luxury Resort in Seminyak"
    },
    {
      day: 2,
      title: "Seminyak Beach & Tanah Lot Temple",
      description: "After breakfast, spend the morning relaxing at Seminyak Beach. In the afternoon, visit the iconic Tanah Lot Temple perched on a rocky outcrop in the sea. Watch the spectacular sunset before returning to your hotel.",
      meals: ["Breakfast", "Lunch"],
      accommodation: "Luxury Resort in Seminyak"
    },
    {
      day: 3,
      title: "Transfer to Ubud & Sacred Monkey Forest",
      description: "Check out and transfer to Ubud, the cultural heart of Bali. En route, visit a traditional Balinese village to see local crafts being made. After check-in at your Ubud hotel, explore the Sacred Monkey Forest Sanctuary.",
      meals: ["Breakfast", "Lunch"],
      accommodation: "Boutique Hotel in Ubud"
    },
    {
      day: 4,
      title: "Tegallalang Rice Terraces & Ubud Market",
      description: "Visit the stunning Tegallalang Rice Terraces in the morning. Enjoy lunch at a local restaurant overlooking the terraces. In the afternoon, explore Ubud Market and visit the Ubud Palace.",
      meals: ["Breakfast", "Lunch"],
      accommodation: "Boutique Hotel in Ubud"
    },
    {
      day: 5,
      title: "Mount Batur Sunrise Trek",
      description: "Early morning departure for a sunrise trek up Mount Batur volcano. Enjoy breakfast at the summit while taking in the spectacular views. Return to the hotel for rest, with the afternoon at leisure.",
      meals: ["Breakfast", "Lunch"],
      accommodation: "Boutique Hotel in Ubud"
    },
    {
      day: 6,
      title: "Transfer to Nusa Dua & Beach Time",
      description: "Check out and transfer to Nusa Dua. Check in at your beachfront resort and spend the rest of the day relaxing on the beautiful beaches of Nusa Dua.",
      meals: ["Breakfast"],
      accommodation: "Beachfront Resort in Nusa Dua"
    },
    {
      day: 7,
      title: "Water Sports & Uluwatu Temple",
      description: "Morning of water sports activities in Tanjung Benoa. In the afternoon, visit the cliff-top Uluwatu Temple and watch the famous Kecak Fire Dance at sunset. Farewell dinner at a seafood restaurant on Jimbaran Beach.",
      meals: ["Breakfast", "Dinner"],
      accommodation: "Beachfront Resort in Nusa Dua"
    },
    {
      day: 8,
      title: "Departure Day",
      description: "Free time until your airport transfer. Depending on your flight time, you might have the opportunity for last-minute shopping or relaxation before your departure from Bali.",
      meals: ["Breakfast"],
      accommodation: "N/A"
    }
  ],
  included: [
    "7 nights accommodation as per itinerary",
    "Meals as mentioned in the itinerary",
    "All transfers and transportation in an air-conditioned vehicle",
    "English-speaking guide throughout the tour",
    "Entrance fees to all sites mentioned in the itinerary",
    "Water sports activities in Tanjung Benoa",
    "Mount Batur sunrise trekking experience",
    "Welcome and farewell dinners",
    "24/7 assistance during your stay"
  ],
  excluded: [
    "International flights to/from Bali",
    "Travel insurance",
    "Personal expenses (laundry, telephone calls, etc.)",
    "Alcoholic beverages",
    "Additional activities not mentioned in the itinerary",
    "Tips and gratuities for guides and drivers"
  ]
};

const availableDates = [
  { id: 1, startDate: "Jun 15, 2025", endDate: "Jun 22, 2025", spotsLeft: 8 },
  { id: 2, startDate: "Jul 10, 2025", endDate: "Jul 17, 2025", spotsLeft: 12 },
  { id: 3, startDate: "Aug 05, 2025", endDate: "Aug 12, 2025", spotsLeft: 4 },
  { id: 4, startDate: "Sep 20, 2025", endDate: "Sep 27, 2025", spotsLeft: 16 }
];

const PackageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedDateId, setSelectedDateId] = useState<number | null>(null);
  const [travelers, setTravelers] = useState(2);
  const [activeTab, setActiveTab] = useState<'itinerary' | 'details' | 'reviews'>('itinerary');

  // In a real app, you would fetch the package details based on the ID
  // For this demo, we'll just use the mock data

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === packageDetails.gallery.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? packageDetails.gallery.length - 1 : prev - 1));
  };

  const handleDateSelect = (dateId: number) => {
    setSelectedDateId(dateId);
  };

  const handleTravelersChange = (value: number) => {
    if (value >= 1 && value <= 10) {
      setTravelers(value);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      {/* Header Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img 
          src={packageDetails.gallery[activeImageIndex]} 
          alt={packageDetails.title} 
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex flex-wrap gap-2 mb-3">
              {packageDetails.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="inline-block bg-blue-600/80 text-white text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{packageDetails.title}</h1>
            <div className="flex items-center text-white mb-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{packageDetails.location}</span>
            </div>
            <div className="flex items-center text-white">
              <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{packageDetails.rating}</span>
              <span className="mx-1">•</span>
              <span>{packageDetails.reviewCount} reviews</span>
              <span className="mx-2">•</span>
              <Clock className="h-5 w-5 mr-1" />
              <span>{packageDetails.duration}</span>
            </div>
          </div>
        </div>

        {/* Gallery Navigation */}
        <button 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          onClick={handlePrevImage}
        >
          <ChevronLeft className="h-5 w-5 text-gray-800" />
        </button>
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
          onClick={handleNextImage}
        >
          <ChevronRight className="h-5 w-5 text-gray-800" />
        </button>

        {/* Gallery Thumbnails */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {packageDetails.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === activeImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
            <Heart className="h-5 w-5 text-gray-800" />
          </button>
          <button className="bg-white/80 hover:bg-white p-2 rounded-full transition-colors">
            <Share2 className="h-5 w-5 text-gray-800" />
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-white rounded-lg shadow-md mb-8">
              <div className="border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`px-4 py-3 font-medium ${
                      activeTab === 'itinerary'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('itinerary')}
                  >
                    Itinerary
                  </button>
                  <button
                    className={`px-4 py-3 font-medium ${
                      activeTab === 'details'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('details')}
                  >
                    Details
                  </button>
                  <button
                    className={`px-4 py-3 font-medium ${
                      activeTab === 'reviews'
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('reviews')}
                  >
                    Reviews
                  </button>
                </div>
              </div>

              <div className="p-6">
                {activeTab === 'itinerary' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Itinerary</h2>
                    
                    <div className="space-y-8">
                      {packageDetails.itinerary.map((day) => (
                        <div key={day.day} className="relative pl-8 pb-8 border-l-2 border-gray-200 last:border-l-0 last:pb-0">
                          <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-blue-600"></div>
                          <div className="bg-gray-50 rounded-lg p-5">
                            <h3 className="text-lg font-semibold mb-1">
                              Day {day.day}: {day.title}
                            </h3>
                            <p className="text-gray-600 mb-4">{day.description}</p>
                            <div className="flex flex-wrap gap-4">
                              <div>
                                <div className="text-sm font-medium text-gray-500 mb-1">Meals Included</div>
                                <div className="flex gap-2">
                                  {day.meals.map((meal, index) => (
                                    <span 
                                      key={index} 
                                      className="inline-block bg-green-50 text-green-700 text-xs font-medium px-2.5 py-0.5 rounded"
                                    >
                                      {meal}
                                    </span>
                                  ))}
                                  {day.meals.length === 0 && (
                                    <span className="text-gray-500 text-sm">No meals included</span>
                                  )}
                                </div>
                              </div>
                              {day.accommodation !== "N/A" && (
                                <div>
                                  <div className="text-sm font-medium text-gray-500 mb-1">Accommodation</div>
                                  <div className="text-gray-800">{day.accommodation}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {activeTab === 'details' && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Trip Details</h2>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Description</h3>
                      <p className="text-gray-600">{packageDetails.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Trip Highlights</h3>
                      <ul className="space-y-2">
                        {packageDetails.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">What's Included</h3>
                        <ul className="space-y-2">
                          {packageDetails.included.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">What's Not Included</h3>
                        <ul className="space-y-2">
                          {packageDetails.excluded.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-red-500 mr-2 flex-shrink-0 mt-0.5 font-bold">×</span>
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'reviews' && (
                  <div className="flex items-center justify-center h-64">
                    <p className="text-gray-500">Reviews coming soon...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex justify-between items-start mb-4">
                <div>
                  {packageDetails.discount ? (
                    <div className="flex items-baseline">
                      <span className="text-gray-400 line-through text-sm mr-2">${packageDetails.discount}</span>
                      <span className="text-blue-600 font-bold text-2xl">${packageDetails.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/person</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-blue-600 font-bold text-2xl">${packageDetails.price}</span>
                      <span className="text-gray-500 text-sm ml-1">/person</span>
                    </div>
                  )}
                </div>
                <div className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  20% off
                </div>
              </div>

              <div className="border-t border-b border-gray-200 py-4 mb-4">
                <h3 className="font-medium text-gray-800 mb-3">Select Date</h3>
                <div className="space-y-2">
                  {availableDates.map((date) => (
                    <button
                      key={date.id}
                      onClick={() => handleDateSelect(date.id)}
                      className={`w-full text-left p-3 rounded-md border ${
                        selectedDateId === date.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="flex justify-between">
                        <div>
                          <div className="font-medium">{date.startDate}</div>
                          <div className="text-sm text-gray-500">to {date.endDate}</div>
                        </div>
                        <div className="text-sm text-gray-500">
                          {date.spotsLeft} spots left
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Travelers</h3>
                <div className="flex items-center border rounded-md">
                  <button
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleTravelersChange(travelers - 1)}
                  >
                    -
                  </button>
                  <div className="flex-grow text-center">{travelers}</div>
                  <button
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                    onClick={() => handleTravelersChange(travelers + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Price ({travelers} travelers)</span>
                  <span>${packageDetails.price * travelers}</span>
                </div>
                <div className="flex justify-between text-gray-600 mb-2">
                  <span>Service fee</span>
                  <span>${Math.floor(packageDetails.price * travelers * 0.05)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
                  <span>Total</span>
                  <span>${packageDetails.price * travelers + Math.floor(packageDetails.price * travelers * 0.05)}</span>
                </div>
              </div>

              <Button 
                className="w-full justify-center py-3"
                disabled={!selectedDateId}
              >
                Book Now
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                No payment required now. Pay when you arrive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;