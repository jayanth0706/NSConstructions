import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const TestimonialSnippet = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      project: 'NS SkyVillas',
      rating: 4.5,
      text: 'NS Constructions delivered beyond our expectations. The quality of construction and attention to detail is outstanding. Our dream home became a reality.'
    },
    {
      name: 'Priya Sharma',
      project: 'NS Green Heights',
      rating: 5,
      text: 'Professional team, timely delivery, and excellent customer service. We are extremely happy with our new home. Highly recommended!'
    },
    {
      name: 'Amit Reddy',
      project: 'NS Commercial Plaza',
      rating: 4,
      text: 'The commercial space exceeded all our business requirements. Great location, modern amenities, and fantastic support from the NS team.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-to-r from-neutral-50 to-primary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
            What Our Clients Say
          </h2>
          <p className="font-body text-lg text-neutral-600">
            Real experiences from real people who chose NS Constructions
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg p-8 md:p-12 animate-fade-in">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="bg-accent-500 p-3 rounded-full">
              <Quote className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Star Rating with Half-Star Support */}
          <div className="mb-6">
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => {
                const isFull = i < Math.floor(currentTestimonial.rating);
                const isHalf = i === Math.floor(currentTestimonial.rating) && currentTestimonial.rating % 1 !== 0;

                return (
                  <div key={i} className="relative w-5 h-5">
                    <Star className="text-neutral-300 w-5 h-5 absolute" />
                    {isFull && (
                      <Star className="text-accent-500 fill-current w-5 h-5 absolute" />
                    )}
                    {isHalf && (
                      <div className="absolute overflow-hidden w-[50%] h-full">
                        <Star className="text-accent-500 fill-current w-5 h-5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <p className="font-body text-lg md:text-xl text-neutral-700 leading-relaxed italic">
              "{currentTestimonial.text}"
            </p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <div className="text-left">
              <h4 className="font-heading font-semibold text-primary-500">
                {currentTestimonial.name}
              </h4>
              <p className="font-body text-neutral-600 text-sm">
                {currentTestimonial.project}
              </p>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-accent-500' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSnippet;
