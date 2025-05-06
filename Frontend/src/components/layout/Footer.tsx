import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">TravelScript</span>
            </div>
            <p className="text-gray-300 mb-4">
              Discover the world with TravelScript. We offer unforgettable travel experiences with personalized service and exceptional value.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-blue-400">Home</Link></li>
              <li><Link to="/destinations" className="text-gray-300 hover:text-blue-400">Destinations</Link></li>
              <li><Link to="/packages" className="text-gray-300 hover:text-blue-400">Travel Packages</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><Link to="/destinations/bali" className="text-gray-300 hover:text-blue-400">Bali, Indonesia</Link></li>
              <li><Link to="/destinations/santorini" className="text-gray-300 hover:text-blue-400">Santorini, Greece</Link></li>
              <li><Link to="/destinations/kyoto" className="text-gray-300 hover:text-blue-400">Kyoto, Japan</Link></li>
              <li><Link to="/destinations/costa-rica" className="text-gray-300 hover:text-blue-400">Costa Rica</Link></li>
              <li><Link to="/destinations/switzerland" className="text-gray-300 hover:text-blue-400">Switzerland</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">123 Travel Street, City, Country</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">info@TravelScript.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TravelScript. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;