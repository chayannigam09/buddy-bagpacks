import React, { useState } from 'react';
import { Star, MapPin, Users, Clock, Calendar, Camera, Mountain, Utensils, IndianRupeeIcon } from 'lucide-react';
import pachmari from '../images/pachmarhi.jpg';
import maheswar from '../images/maheswar.jpg';

const destinations = [
  {
    id: 1,
    name: 'Pachmarhi',
    image: pachmari,
    rating: 4.9,
    price: '4999/-',
    duration: '2 Days 3 Nights',
    travelers: '12-15',
    description: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers',
    detailedDescription: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers as your trusted companion. Nestled in the heart of the Satpura Range, this scenic retreat offers lush forests, serene waterfalls, and breathtaking views. Kick off the adventure with a lively pool party with DJ, followed by a thrilling gypsy safari through the wilds of Satpura. Evenings come alive with music nights, live performances, games, and unforgettable bonding under the stars. Explore iconic spots like Bee Fall, Dhoopgarh, Jata Shankar, and the beautiful Chouragarh Mahadev trek, all while we handle the details. Let Buddy Backpackers guide you through a trip full of fun, adventure, and lifelong memories.',
    highlights: ['Bee Fall', 'Dhoopgarh ', 'Jata Shankar Caves', 'Chauragarh Mahadev Temple (Trek)','Gypsy Safari'],
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
    name: 'Jam Gate | Maheshwar | Sahastradhara ',
    image: maheswar,
    rating: 4.8,
    price: '800/-',
    duration: '1 Days',
    travelers: '12-15',
    description: 'Escape the city for a perfect one-day trip to Jam Gate, Maheshwar, and Sahastradhara, blending scenic views, heritage charm, and serene nature.',
    detailedDescription:"Embark on a refreshing one-day getaway from Indore to the breathtaking landscapes of Jam Gate, the historical charm of Maheshwar, and the serene beauty of Sahastradhara. Our journey begins early in the morning as we hit the road and head towards the mystical Jam Gate, where misty hills, forest views, and fresh air create the perfect start. After a hearty breakfast en route, take time to explore the scenic gateway nestled between the Malwa and Nimar ranges, offering panoramic views that are perfect for photography and nature lovers. Next, we drive down to Maheshwar, a riverside heritage town rich with temples, history, and spiritual energy. Walk along the majestic Ahilyabai Fort, soak in the peaceful vibes of the Narmada Ghats, and enjoy boating on the calm waters surrounded by age-old architecture and holy chants. Our final destination is the hidden gem of Sahastradhara, a quiet natural retreat known for its gentle streams, mini waterfalls, and forest surroundings. It’s the ideal spot to unwind, dip your feet in flowing waters, or simply enjoy nature's rhythm. By sunset, we head back to Indore carrying moments of calm, beauty, and joyful memories.",
    highlights: ['Jam Gate', 'Traking', 'Boating', 'Waterfalls'],
    itinerary: [
      { day: 1, title: '6:00 AM – Departure from Indore', activities: ['Assemble and begin your road trip from Indore with your fellow explorers.', 
        ' 8:00 AM – Breakfast Stop + Explore Jam Gate', 
        'Take a breakfast halt en route near Jam Gate.', 
        'Capture panoramic views of rolling hills, deep valleys, and lush forests.',
        '10:30 AM – Depart for Maheshwar',
        'Continue your drive toward the historic town of Maheshwar (approx. 1.5 hours).',
        'Enjoy the changing landscape as you descend into the Narmada belt.',
        '12:30 PM – Maheshwar Sightseeing & Boating(at your own cost)',
        'Visit the Ahilyabai Fort, temples, and the serene Narmada Ghats.',
        'Experience boating in the calm waters of the Narmada River with scenic views of the stone steps and temples.',
        '2:00 PM – Lunch at a Local Eatery',
        'Savor local cuisine at a recommended restaurant or dhaba in Maheshwar.',
        '3:00 PM – Depart for Sahastradhara',
        'Drive to Sahastradhara (approx. 1 hour), a hidden gem known for its natural beauty.',
        '4:00 PM – Explore Sahastradhara',
        'Enjoy the natural streams, mini waterfalls, and forest vibe.',
        'Take a leisurely walk, dip your feet in the flowing waters, or relax amidst nature.',
        '5:30 PM – Evening Tea & Snacks',
        'Stop at a local tea stall or café to enjoy evening snacks and refreshments.',
        '6:30 PM – Departure for Indore',
        'Begin your return journey to Indore, reflecting on the day’s adventures.',
        '8:30 PM – Arrival in Indore',
        'Arrive back in Indore with a heart full of memories and a camera full of beautiful pictures.',
      ] },
     ]
  },
  {
    id: 1,
    name: 'Pachmarhi',
    image: pachmari,
    rating: 4.9,
    price: '4999/-',
    duration: '2 Days 3 Nights',
    travelers: '12-15',
    description: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers',
    detailedDescription: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers as your trusted companion. Nestled in the heart of the Satpura Range, this scenic retreat offers lush forests, serene waterfalls, and breathtaking views. Kick off the adventure with a lively pool party with DJ, followed by a thrilling gypsy safari through the wilds of Satpura. Evenings come alive with music nights, live performances, games, and unforgettable bonding under the stars. Explore iconic spots like Bee Fall, Dhoopgarh, Jata Shankar, and the beautiful Chouragarh Mahadev trek, all while we handle the details. Let Buddy Backpackers guide you through a trip full of fun, adventure, and lifelong memories.',
    highlights: ['Bee Fall', 'Dhoopgarh ', 'Jata Shankar Caves', 'Chauragarh Mahadev Temple (Trek)','Gypsy Safari'],
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
    name: 'Jam Gate | Maheshwar | Sahastradhara ',
    image: maheswar,
    rating: 4.8,
    price: '800/-',
    duration: '1 Days',
    travelers: '12-15',
    description: 'Escape the city for a perfect one-day trip to Jam Gate, Maheshwar, and Sahastradhara, blending scenic views, heritage charm, and serene nature.',
    detailedDescription:"Embark on a refreshing one-day getaway from Indore to the breathtaking landscapes of Jam Gate, the historical charm of Maheshwar, and the serene beauty of Sahastradhara. Our journey begins early in the morning as we hit the road and head towards the mystical Jam Gate, where misty hills, forest views, and fresh air create the perfect start. After a hearty breakfast en route, take time to explore the scenic gateway nestled between the Malwa and Nimar ranges, offering panoramic views that are perfect for photography and nature lovers. Next, we drive down to Maheshwar, a riverside heritage town rich with temples, history, and spiritual energy. Walk along the majestic Ahilyabai Fort, soak in the peaceful vibes of the Narmada Ghats, and enjoy boating on the calm waters surrounded by age-old architecture and holy chants. Our final destination is the hidden gem of Sahastradhara, a quiet natural retreat known for its gentle streams, mini waterfalls, and forest surroundings. It’s the ideal spot to unwind, dip your feet in flowing waters, or simply enjoy nature's rhythm. By sunset, we head back to Indore carrying moments of calm, beauty, and joyful memories.",
    highlights: ['Jam Gate', 'Traking', 'Boating', 'Waterfalls'],
    itinerary: [
      { day: 1, title: '6:00 AM – Departure from Indore', activities: ['Assemble and begin your road trip from Indore with your fellow explorers.', 
        ' 8:00 AM – Breakfast Stop + Explore Jam Gate', 
        'Take a breakfast halt en route near Jam Gate.', 
        'Capture panoramic views of rolling hills, deep valleys, and lush forests.',
        '10:30 AM – Depart for Maheshwar',
        'Continue your drive toward the historic town of Maheshwar (approx. 1.5 hours).',
        'Enjoy the changing landscape as you descend into the Narmada belt.',
        '12:30 PM – Maheshwar Sightseeing & Boating(at your own cost)',
        'Visit the Ahilyabai Fort, temples, and the serene Narmada Ghats.',
        'Experience boating in the calm waters of the Narmada River with scenic views of the stone steps and temples.',
        '2:00 PM – Lunch at a Local Eatery',
        'Savor local cuisine at a recommended restaurant or dhaba in Maheshwar.',
        '3:00 PM – Depart for Sahastradhara',
        'Drive to Sahastradhara (approx. 1 hour), a hidden gem known for its natural beauty.',
        '4:00 PM – Explore Sahastradhara',
        'Enjoy the natural streams, mini waterfalls, and forest vibe.',
        'Take a leisurely walk, dip your feet in the flowing waters, or relax amidst nature.',
        '5:30 PM – Evening Tea & Snacks',
        'Stop at a local tea stall or café to enjoy evening snacks and refreshments.',
        '6:30 PM – Departure for Indore',
        'Begin your return journey to Indore, reflecting on the day’s adventures.',
        '8:30 PM – Arrival in Indore',
        'Arrive back in Indore with a heart full of memories and a camera full of beautiful pictures.',
      ] },
     ]
  },
  {
    id: 1,
    name: 'Pachmarhi',
    image: pachmari,
    rating: 4.9,
    price: '4999/-',
    duration: '2 Days 3 Nights',
    travelers: '12-15',
    description: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers',
    detailedDescription: 'Embark on a magical group getaway to Pachmarhi, the Queen of Satpura, with Buddy Backpackers as your trusted companion. Nestled in the heart of the Satpura Range, this scenic retreat offers lush forests, serene waterfalls, and breathtaking views. Kick off the adventure with a lively pool party with DJ, followed by a thrilling gypsy safari through the wilds of Satpura. Evenings come alive with music nights, live performances, games, and unforgettable bonding under the stars. Explore iconic spots like Bee Fall, Dhoopgarh, Jata Shankar, and the beautiful Chouragarh Mahadev trek, all while we handle the details. Let Buddy Backpackers guide you through a trip full of fun, adventure, and lifelong memories.',
    highlights: ['Bee Fall', 'Dhoopgarh ', 'Jata Shankar Caves', 'Chauragarh Mahadev Temple (Trek)','Gypsy Safari'],
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
    name: 'Jam Gate | Maheshwar | Sahastradhara ',
    image: maheswar,
    rating: 4.8,
    price: '800/-',
    duration: '1 Days',
    travelers: '12-15',
    description: 'Escape the city for a perfect one-day trip to Jam Gate, Maheshwar, and Sahastradhara, blending scenic views, heritage charm, and serene nature.',
    detailedDescription:"Embark on a refreshing one-day getaway from Indore to the breathtaking landscapes of Jam Gate, the historical charm of Maheshwar, and the serene beauty of Sahastradhara. Our journey begins early in the morning as we hit the road and head towards the mystical Jam Gate, where misty hills, forest views, and fresh air create the perfect start. After a hearty breakfast en route, take time to explore the scenic gateway nestled between the Malwa and Nimar ranges, offering panoramic views that are perfect for photography and nature lovers. Next, we drive down to Maheshwar, a riverside heritage town rich with temples, history, and spiritual energy. Walk along the majestic Ahilyabai Fort, soak in the peaceful vibes of the Narmada Ghats, and enjoy boating on the calm waters surrounded by age-old architecture and holy chants. Our final destination is the hidden gem of Sahastradhara, a quiet natural retreat known for its gentle streams, mini waterfalls, and forest surroundings. It’s the ideal spot to unwind, dip your feet in flowing waters, or simply enjoy nature's rhythm. By sunset, we head back to Indore carrying moments of calm, beauty, and joyful memories.",
    highlights: ['Jam Gate', 'Traking', 'Boating', 'Waterfalls'],
    itinerary: [
      { day: 1, title: '6:00 AM – Departure from Indore', activities: ['Assemble and begin your road trip from Indore with your fellow explorers.', 
        ' 8:00 AM – Breakfast Stop + Explore Jam Gate', 
        'Take a breakfast halt en route near Jam Gate.', 
        'Capture panoramic views of rolling hills, deep valleys, and lush forests.',
        '10:30 AM – Depart for Maheshwar',
        'Continue your drive toward the historic town of Maheshwar (approx. 1.5 hours).',
        'Enjoy the changing landscape as you descend into the Narmada belt.',
        '12:30 PM – Maheshwar Sightseeing & Boating(at your own cost)',
        'Visit the Ahilyabai Fort, temples, and the serene Narmada Ghats.',
        'Experience boating in the calm waters of the Narmada River with scenic views of the stone steps and temples.',
        '2:00 PM – Lunch at a Local Eatery',
        'Savor local cuisine at a recommended restaurant or dhaba in Maheshwar.',
        '3:00 PM – Depart for Sahastradhara',
        'Drive to Sahastradhara (approx. 1 hour), a hidden gem known for its natural beauty.',
        '4:00 PM – Explore Sahastradhara',
        'Enjoy the natural streams, mini waterfalls, and forest vibe.',
        'Take a leisurely walk, dip your feet in the flowing waters, or relax amidst nature.',
        '5:30 PM – Evening Tea & Snacks',
        'Stop at a local tea stall or café to enjoy evening snacks and refreshments.',
        '6:30 PM – Departure for Indore',
        'Begin your return journey to Indore, reflecting on the day’s adventures.',
        '8:30 PM – Arrival in Indore',
        'Arrive back in Indore with a heart full of memories and a camera full of beautiful pictures.',
      ] },
     ]
  },
 
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
                     <IndianRupeeIcon className='h-5'/> {destination.price} PP</span>
                    {/* <span className="text-gray-500 ml-1">per person</span> */}
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
            <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-start">
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

            <p className='px-6 py-3'>{selectedDest.detailedDescription}</p>
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
                    <p className="text-gray-600">Starting from <span className="text-2xl font-bold text-blue-600 inline-flex items-center"><IndianRupeeIcon className='h-5'/> {selectedDest.price} PP</span> </p>
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