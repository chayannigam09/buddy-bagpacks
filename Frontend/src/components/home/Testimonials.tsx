import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Our trip to Bali was absolutely magical. The TravelScript team took care of every detail, from accommodations to local experiences. I couldn't have asked for a better vacation!",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 2,
    name: "Mark Thompson",
    location: "London, UK",
    text: "The Swiss Alps package exceeded all our expectations. The views were breathtaking, and the itinerary was perfectly balanced with adventure and relaxation. Highly recommend!",
    rating: 5,
    imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Madrid, Spain",
    text: "Our family trip to Japan was the perfect cultural immersion. The guides were knowledgeable, and the experiences were authentic. TravelScript made our dream vacation a reality.",
    rating: 4,
    imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from adventurers who've experienced the TravelScript difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-gray-300 shadow-xl hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index}
            className={`h-5 w-5 ${index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic">"{testimonial.text}"</p>
    </div>
  );
};

export default Testimonials;