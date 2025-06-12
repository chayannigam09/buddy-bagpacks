import React, { useState } from 'react';
import { Star, MapPin, Users, Clock, Calendar, Camera, Mountain, Utensils, IndianRupeeIcon } from 'lucide-react';
import pachmari from '../images/pachmarhi.jpg'; // Adjust the path as necessary

const destinations = [
  {
    id: 1,
    name: 'Pachmarhi',
    image: pachmari,
    rating: 4.9,
    price: '4999',
    duration: '2 Days 3 Nights',
    travelers: '12-15',
    description: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers',
    detailedDescription: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers as your trusted companion. Nestled in the heart of the Satpura Range, this scenic retreat offers lush forests, serene waterfalls, and breathtaking views. Kick off the adventure with a lively pool party with DJ, followed by a thrilling gypsy safari through the wilds of Satpura. Evenings come alive with music nights, live performances, games, and unforgettable bonding under the stars. Explore iconic spots like Bee Fall, Dhoopgarh, Jata Shankar, and the beautiful Chouragarh Mahadev trek, all while we handle the details. Let Buddy Backpackers guide you through a trip full of fun, adventure, and lifelong memories.',
    highlights: ['Ubud Rice Terraces', 'Temple Hopping', 'Beach Relaxation', 'Local Cuisine'],
    itinerary: [
      { day: 1, title: 'Departure from Indore', activities: ['As twilight descends, a sense of adventure stirs in the air — the journey to Pachmarhi is about to unfold.', 'Connect with your fellow travelers and get ready to dive into an unforgettable escape.', 'Leave behind the familiar sights as we set out on our overnight expedition.', 'Warm introductions and group bonding kick off the experience.', 'Indore: 10:00 PM – Radisson Square', 'Bhopal: 3:30 AM – Lal Ghati & ISBT', 'Pipariya: 6:00 AM'] },
      { day: 2, title: 'Arrival at Pachmarhi | Satpura exploration', activities: ['Awaken to a refreshing new day in the enchanting Queen of Satpura – Pachmarhi.', 'Kickstart your morning with a wholesome breakfast to gear up for the day’s adventures.', 'Dive into some fun with an exciting pool party to set the vibe!', 'Proceed with the check-in process at the hotel (early check-in subject to availability), freshen up, and prepare for a day of exploration.', 'Set off for a scenic journey through Pachmarhi’s iconic gems: Choragarh Mahadev (Optional, depending on time), Bada Mahadev, Gupt Mahadev, Green Valley, Pachmarhi Lake', 'As evening approaches, relish a delightful dinner and unwind with an overnight stay at the hotel.✨ Later, enjoy a lively music night and engaging group activities at the resort.', 'Note: Sightseeing is subject to availability. we are not liable for missed spots due to factors such as time constraints, weather, group delays, or mechanical issues.'] },
      {
        day: 3, title: 'Adventure continues | Gyspsy safari | waterfall | sunset point', activities: ['Begin your day with an early wake-up call and energize yourself with a delightful breakfast.',
          "Check out from the resort and gather for a short trip briefing before diving into the day's excitement.",
          'Get ready for a thrilling day of adventure with an exhilarating gypsy ride through the serene beauty of Pachmarhi.',
          'Prepare to explore nature’s marvels and iconic landmarks, including: Jata Shankar, Pandav Caves, Ramya Kund, Bee Fall, Jal Gali, Reechgarh, Adbhut Drashya (Amazing Views), Forest Museum, Dhoopgarh for breathtaking sunrise and sunset points,And unwind at the vibrant hippie cafes in the Pachmarhi market.',
          'Wrap up your day with a delicious dinner, then pack up your bags—full of memories—and prepare for your journey back home.']
      },
      {
        day: 4, title: 'Arrival at your home with lots of memories with strangers', activities: ['Drop Points: Bhopal: 2:00 AM and Indore: 6:30 AM',
          'Though the trip comes to an end, the memories will stay with you forever.',
          'You’re now officially a #TravelTrekker and a proud part of Central India’s fastest-growing and coolest travel community!',
          'We look forward to seeing you on many more exciting adventures ahead.',
          'Until then, remember our motto: Work. Travel. Repeat. 🌍✈️💼']
      },
    ]
  },
  {
    id: 2,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '$1299',
    duration: '5 Days',
    travelers: '8-12',
    description: 'Discover the breathtaking sunsets and white-washed architecture of this Greek paradise.',
    highlights: ['Oia Sunset', 'Wine Tasting', 'Volcanic Tours', 'Blue Dome Churches'],
    itinerary: [
      { day: 1, title: 'Arrival in Santorini', activities: ['Airport pickup', 'Fira exploration', 'Cable car ride', 'Welcome dinner'] },
      { day: 2, title: 'Oia & Northern Villages', activities: ['Oia village tour', 'Maritime Museum', 'Sunset viewing', 'Traditional taverna'] },
      { day: 3, title: 'Volcanic Adventure', activities: ['Volcano boat tour', 'Hot springs swim', 'Thirassia island', 'Wine tasting'] },
      { day: 4, title: 'Beach & Archaeology', activities: ['Red Beach visit', 'Akrotiri excavations', 'Perissa Beach', 'Local cuisine'] },
      { day: 5, title: 'Departure', activities: ['Last shopping', 'Airport transfer', 'Flight departure'] }
    ]
  },
  {
    id: 3,
    name: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: '$1599',
    duration: '10 Days',
    travelers: '15-20',
    description: 'Immerse yourself in the perfect blend of ancient traditions and cutting-edge technology.',
    highlights: ['Shibuya Crossing', 'Mount Fuji', 'Traditional Temples', 'Robot Restaurant'],
    itinerary: [
      { day: 1, title: 'Tokyo Arrival', activities: ['Narita Airport pickup', 'Shibuya district tour', 'Crossing experience', 'Welcome ramen'] },
      { day: 2, title: 'Traditional Tokyo', activities: ['Senso-ji Temple', 'Asakusa district', 'Traditional crafts', 'Tea ceremony'] },
      { day: 3, title: 'Modern Marvels', activities: ['Tokyo Skytree', 'Akihabara electronics', 'Robot Restaurant', 'Karaoke night'] },
      { day: 4, title: 'Mount Fuji Day Trip', activities: ['Bullet train to Kawaguchi', 'Lake Kawaguchi', 'Fuji viewing', 'Onsen experience'] },
      { day: 5, title: 'Harajuku Culture', activities: ['Meiji Shrine', 'Harajuku fashion', 'Takeshita Street', 'Omotesando Hills'] },
      { day: 6, title: 'Tsukiji & Ginza', activities: ['Tsukiji Fish Market', 'Sushi breakfast', 'Ginza shopping', 'Imperial Palace'] },
      { day: 7, title: 'Day Trip to Nikko', activities: ['Toshogu Shrine', 'Kegon Falls', 'Lake Chuzenji', 'Traditional ryokan'] },
      { day: 8, title: 'Ueno & Museums', activities: ['Ueno Park', 'Tokyo National Museum', 'Ameyoko Market', 'Cherry blossoms'] },
      { day: 9, title: 'Free Exploration', activities: ['Personal exploration', 'Shopping time', 'Optional activities', 'Farewell dinner'] },
      { day: 10, title: 'Departure', activities: ['Last-minute shopping', 'Airport transfer', 'Flight departure'] }
    ]
  },
  {
    id: 4,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.7,
    price: '$1199',
    duration: '8 Days',
    travelers: '10-14',
    description: 'Trek through the Andes and discover the ancient Incan citadel high in the mountains.',
    highlights: ['Inca Trail Trek', 'Sacred Valley', 'Cusco City', 'Llama Encounters'],
    itinerary: [
      { day: 1, title: 'Cusco Arrival', activities: ['Airport pickup', 'Altitude acclimatization', 'Cusco city tour', 'Coca tea ceremony'] },
      { day: 2, title: 'Sacred Valley', activities: ['Pisac Market', 'Ollantaytambo fortress', 'Traditional weaving', 'Valley overnight'] },
      { day: 3, title: 'Inca Trail Day 1', activities: ['Trek begins', 'Wayllabamba camp', 'Andean landscapes', 'Group bonding'] },
      { day: 4, title: 'Inca Trail Day 2', activities: ['Dead Woman\'s Pass', 'Highest point trek', 'Pacaymayo camp', 'Stargazing'] },
      { day: 5, title: 'Inca Trail Day 3', activities: ['Inca ruins exploration', 'Cloud forest trek', 'Wiñay Wayna', 'Final camp'] },
      { day: 6, title: 'Machu Picchu Sunrise', activities: ['Sun Gate arrival', 'Machu Picchu tour', 'Huayna Picchu climb', 'Return to Cusco'] },
      { day: 7, title: 'Cusco Exploration', activities: ['San Pedro Market', 'Qorikancha Temple', 'Sacsayhuamán', 'Celebration dinner'] },
      { day: 8, title: 'Departure', activities: ['Last shopping', 'Airport transfer', 'Flight departure'] }
    ]
  },
  {
    id: 5,
    name: 'Iceland Ring Road',
    image: 'https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    price: '$1799',
    duration: '12 Days',
    travelers: '8-12',
    description: 'Witness the Northern Lights, explore glaciers, and soak in natural hot springs.',
    highlights: ['Northern Lights', 'Blue Lagoon', 'Glacier Hiking', 'Geysir Hot Springs'],
    itinerary: [
      { day: 1, title: 'Reykjavik Arrival', activities: ['Airport pickup', 'City orientation', 'Hallgrimskirkja Church', 'Harbor walk'] },
      { day: 2, title: 'Golden Circle', activities: ['Thingvellir National Park', 'Geysir geothermal area', 'Gullfoss waterfall', 'Secret Lagoon'] },
      { day: 3, title: 'South Coast', activities: ['Seljalandsfoss waterfall', 'Skogafoss waterfall', 'Black sand beaches', 'Vik overnight'] },
      { day: 4, title: 'Glacier Adventure', activities: ['Vatnajokull glacier', 'Ice cave exploration', 'Jokulsarlon lagoon', 'Diamond Beach'] },
      { day: 5, title: 'East Fjords', activities: ['Scenic coastal drive', 'Fishing villages', 'Puffin watching', 'Local seafood'] },
      { day: 6, title: 'Lake Myvatn', activities: ['Pseudo craters', 'Dimmuborgir lava fields', 'Myvatn Nature Baths', 'Godafoss waterfall'] },
      { day: 7, title: 'Akureyri & Whales', activities: ['Whale watching tour', 'Akureyri botanical garden', 'Northern capital', 'Local culture'] },
      { day: 8, title: 'Westfjords', activities: ['Remote fjords', 'Bird cliffs', 'Hot springs', 'Dramatic landscapes'] },
      { day: 9, title: 'Snaefellsnes Peninsula', activities: ['Kirkjufell mountain', 'Snaefellsjokull glacier', 'Coastal villages', 'Seal watching'] },
      { day: 10, title: 'Blue Lagoon', activities: ['Geothermal spa', 'Silica mud masks', 'Relaxation day', 'Photography'] },
      { day: 11, title: 'Northern Lights Hunt', activities: ['Aurora hunting', 'Photography workshop', 'Hot chocolate', 'Celebration dinner'] },
      { day: 12, title: 'Departure', activities: ['Last-minute shopping', 'Airport transfer', 'Flight departure'] }
    ]
  },
  {
    id: 6,
    name: 'Kenya Safari',
    image: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.9,
    price: '$2299',
    duration: '14 Days',
    travelers: '6-10',
    description: 'Experience the Big Five and witness the Great Migration in the Masai Mara.',
    highlights: ['Big Five Safari', 'Great Migration', 'Masai Culture', 'Balloon Safari'],
    itinerary: [
      { day: 1, title: 'Nairobi Arrival', activities: ['Airport pickup', 'Hotel check-in', 'City orientation', 'Welcome dinner'] },
      { day: 2, title: 'Amboseli National Park', activities: ['Drive to Amboseli', 'Elephant herds', 'Mount Kilimanjaro views', 'Game drive'] },
      { day: 3, title: 'Amboseli Full Day', activities: ['Morning game drive', 'Masai village visit', 'Cultural exchange', 'Sunset photography'] },
      { day: 4, title: 'Lake Nakuru', activities: ['Drive to Nakuru', 'Flamingo watching', 'Rhino sanctuary', 'Bird paradise'] },
      { day: 5, title: 'Masai Mara Arrival', activities: ['Drive to Mara', 'First game drive', 'Big Five search', 'Camp setup'] },
      { day: 6, title: 'Great Migration', activities: ['Migration tracking', 'River crossings', 'Predator watching', 'Photography'] },
      { day: 7, title: 'Hot Air Balloon', activities: ['Balloon safari', 'Aerial views', 'Champagne breakfast', 'Game drive'] },
      { day: 8, title: 'Masai Culture', activities: ['Masai village visit', 'Traditional dances', 'Craft making', 'Storytelling'] },
      { day: 9, title: 'Full Day Safari', activities: ['Extended game drive', 'Picnic lunch', 'Big Five completion', 'Night sounds'] },
      { day: 10, title: 'Lake Naivasha', activities: ['Boat safari', 'Hippo watching', 'Crescent Island walk', 'Bird watching'] },
      { day: 11, title: 'Hell\'s Gate', activities: ['Cycling safari', 'Rock climbing', 'Geothermal features', 'Adventure activities'] },
      { day: 12, title: 'Return to Nairobi', activities: ['Drive back', 'Giraffe Centre', 'Elephant orphanage', 'Souvenir shopping'] },
      { day: 13, title: 'Cultural Day', activities: ['Karen Blixen Museum', 'Kazuri Beads', 'Local markets', 'Farewell dinner'] },
      { day: 14, title: 'Departure', activities: ['Last shopping', 'Airport transfer', 'Flight departure'] }
    ]
  }
];

const Destinations = () => {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null);
  const [showItinerary, setShowItinerary] = useState(false);

  const handleViewItinerary = (destinationId: number) => {
    setSelectedDestination(destinationId);
    setShowItinerary(true);
  };

  const selectedDest = destinations.find(d => d.id === selectedDestination);

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our handpicked destinations around the world, curated for the ultimate backpacking experience with detailed itineraries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed ">{destination.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {destination.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {destination.travelers} people
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-blue-600 inline-flex items-center">
                     <IndianRupeeIcon/> {destination.price}</span>
                    <span className="text-gray-500 ml-1">per person</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleViewItinerary(destination.id)}
                    className="flex-1 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors font-semibold"
                  >
                    View Itinerary
                  </button>
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold">
            View All Destinations
          </button>
        </div>
      </div>

      {/* Itinerary Modal */}
      {showItinerary && selectedDest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 ">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-transparent">
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedDest.name}</h3>
                <p className="text-gray-600">{selectedDest.duration} Detailed Itinerary</p>
              </div>
              <button
                onClick={() => setShowItinerary(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div className="grid gap-6">
                {selectedDest.itinerary.map((day, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6 pb-6">
                    <div className="flex items-center mb-3">
                      <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {day.day}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">{day.title}</h4>
                    </div>
                    <div className="block gap-2">
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center text-gray-700 mb-2">
                          <div className="mt-1 w-2 h-2 bg-blue-500 rounded-full mr-3 shrink-0"></div>
                          <div className="leading-snug">{activity}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Ready to Book?</h4>
                    <p className="text-gray-600">Starting from <span className="text-2xl font-bold text-blue-600">{selectedDest.price}</span> per person</p>
                  </div>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Book This Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Destinations;