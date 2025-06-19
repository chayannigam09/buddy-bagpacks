import React from 'react';
import { Smartphone, Shield, Users, Headphones, MapPin, Calendar } from 'lucide-react';

const services = [
  // {
  //   icon: Smartphone,
  //   title: 'Smart Travel App',
  //   description: 'Plan, book, and manage your entire journey with our intelligent mobile application featuring offline maps and real-time updates.'
  // },
  // {
  //   icon: Shield,
  //   title: 'Travel Insurance',
  //   description: 'Comprehensive coverage for medical emergencies, trip cancellations, and lost baggage to ensure worry-free adventures.'
  // },
  {
    icon: Users,
    title: 'Group Matching',
    description: 'Connect with like-minded travelers and join groups based on interests, destinations, and travel dates.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Round-the-clock customer support available wherever you are in the world, whenever you need assistance.'
  },
  // {
  //   icon: MapPin,
  //   title: 'Local Guides',
  //   description: 'Access to verified local guides and hidden gems recommended by fellow travelers and locals.'
  // },
  {
    icon: Calendar,
    title: 'Flexible Booking',
    description: 'Easy booking modifications, cancellations, and date changes with minimal fees and maximum flexibility.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose TripWithMe?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technology to make your travel experience seamless, safe, and unforgettable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Technology Stack */}
        {/* <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Powered by Innovation</h3>
          <p className="text-xl mb-8 opacity-90">
            Our platform utilizes AI, machine learning, and real-time data to provide personalized travel experiences
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">AI</div>
              <div className="text-sm opacity-80">Smart Recommendations</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">ML</div>
              <div className="text-sm opacity-80">Predictive Analytics</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">IoT</div>
              <div className="text-sm opacity-80">Smart Devices</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">AR/VR</div>
              <div className="text-sm opacity-80">Virtual Previews</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Services;