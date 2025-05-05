import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedDestinations from '../components/home/FeaturedDestinations';
import PopularPackages from '../components/home/PopularPackages';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedDestinations />
      <PopularPackages />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default HomePage;