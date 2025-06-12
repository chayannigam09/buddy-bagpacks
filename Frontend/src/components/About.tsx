import React from 'react';
import { Award, Globe, Users, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Travel with Technology
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2020, BuddyBagpackers emerged from a simple idea: use technology to make travel more accessible, 
              safe, and connected. We believe that every journey should be an opportunity to grow, discover, and create 
              lasting memories with fellow adventurers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our platform combines artificial intelligence, real-time data, and community-driven insights to provide 
              personalized travel experiences that adapt to your preferences, budget, and travel style.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2020</div>
                <div className="text-gray-600">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$5M</div>
                <div className="text-gray-600">Series A Funding</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Global Connection</h4>
              <p className="text-gray-600">Connecting travelers worldwide to create a global community of adventurers.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Innovation</h4>
              <p className="text-gray-600">Leveraging cutting-edge technology to solve real travel challenges.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-purple-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Community</h4>
              <p className="text-gray-600">Building meaningful connections between travelers and local communities.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Excellence</h4>
              <p className="text-gray-600">Delivering exceptional experiences through attention to detail and quality.</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CEO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Alex Chen</h4>
              <p className="text-blue-600 font-semibold mb-4">CEO & Co-Founder</p>
              <p className="text-gray-600">Former Google engineer with 10+ years in travel tech. Passionate about using AI to enhance travel experiences.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CTO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Sarah Martinez</h4>
              <p className="text-blue-600 font-semibold mb-4">CTO & Co-Founder</p>
              <p className="text-gray-600">Former Airbnb senior engineer specializing in scalable platforms and mobile applications for travel industry.</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="CPO"
                className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
              />
              <h4 className="text-xl font-bold text-gray-900 mb-2">David Kumar</h4>
              <p className="text-blue-600 font-semibold mb-4">Chief Product Officer</p>
              <p className="text-gray-600">Award-winning product designer with experience at Uber and Spotify, focused on user-centric travel solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;