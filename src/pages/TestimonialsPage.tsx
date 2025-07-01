import { useState } from 'react';
import { Star, StarHalf, Quote, Play, ChevronLeft, ChevronRight, X } from 'lucide-react';

const TestimonialsPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      project: 'NS SkyVillas',
      rating: 4.5,
      text: 'NS Constructions delivered beyond our expectations. The quality of construction and attention to detail is outstanding. Our dream home became a reality with their professional approach and timely delivery.',
      location: 'Gachibowli'
    },
    {
      name: 'Priya Sharma',
      project: 'NS Green Heights',
      rating: 5,
      text: 'Professional team, timely delivery, and excellent customer service. We are extremely happy with our new home. The amenities and build quality exceeded our expectations. Highly recommended!',
      location: 'Kondapur'
    },
    {
      name: 'Amit Reddy',
      project: 'NS Commercial Plaza',
      rating: 5,
      text: 'The commercial space exceeded all our business requirements. Great location, modern amenities, and fantastic support from the NS team. Our business has flourished in this space.',
      location: 'HITEC City'
    },
    {
      name: 'Sunita Agarwal',
      project: 'NS Royal Residency',
      rating: 4,
      text: 'From booking to possession, the entire journey was smooth. The team was always available to address our concerns. The amenities and interiors are top-notch. Thank you NS Constructions!',
      location: 'Jubilee Hills'
    },
    {
      name: 'Vikram Singh',
      project: 'NS Elite Villas',
      rating: 5,
      text: 'The villa design and construction quality is exceptional. NS Constructions maintained transparency throughout the project. The final outcome is exactly what we envisioned for our family.',
      location: 'Kokapet'
    },
    {
      name: 'Meera Patel',
      project: 'NS Paradise Homes',
      rating: 4.5,
      text: 'Affordable pricing without compromising on quality. The project was completed on time with all promised amenities. Great value for money and excellent after-sales service.',
      location: 'Miyapur'
    }
  ];

  const videoTestimonials = [
    {
      title: 'Happy Family at Purva Smiling Willow',
      thumbnail: '/testimonials/ReviewPic1.png',
      client: 'Kumar Family',
      videoUrl: '/testimonials/Review1.mp4'
    },
    {
      title: 'Happy Family at Purva Silver Sands',
      thumbnail: '/testimonials/ReviewPic2.png',
      client: 'Mr. Narayan Kumar',
      videoUrl: '/testimonials/Review2.mp4'
    }
  ];

  const [showVideoModal, setShowVideoModal] = useState(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | null>(null);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setSelectedVideoUrl(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-500 mb-4">
            Client Testimonials
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Real experiences from real people who chose NS Constructions for their dream homes
          </p>
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="relative bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-500 rounded-full mb-6">
              <Quote className="h-8 w-8 text-white" />
            </div>
            <div className="flex justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => {
                const rating = testimonials[currentTestimonial].rating;
                if (i + 1 <= rating) {
                  return <Star key={i} className="h-6 w-6 text-accent-500 fill-current" />;
                } else if (i + 0.5 <= rating) {
                  return <StarHalf key={i} className="h-6 w-6 text-accent-500 fill-current" />;
                } else {
                  return <Star key={i} className="h-6 w-6 text-neutral-300" />;
                }
              })}
            </div>
            <p className="font-body text-xl md:text-2xl text-neutral-700 leading-relaxed italic mb-8 max-w-4xl mx-auto">
              "{testimonials[currentTestimonial].text}"
            </p>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="text-left">
                <h4 className="font-heading font-semibold text-xl text-primary-500">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-body text-neutral-600">
                  {testimonials[currentTestimonial].project} • {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-primary-500" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent-500' : 'bg-neutral-300'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-primary-500" />
            </button>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => {
                    if (i + 1 <= testimonial.rating) {
                      return (
                        <Star
                          key={i}
                          className="h-6 w-6 text-accent-500 fill-current"
                        />
                      );
                    } else if (i + 0.5 <= testimonial.rating) {
                      return (
                        <StarHalf
                          key={i}
                          className="h-6 w-6 text-accent-500 fill-current"
                        />
                      );
                    } else {
                      return (
                        <Star
                          key={i}
                          className="h-6 w-6 text-neutral-300"
                        />
                      );
                    }
                  })}
                </div>

                <p className="font-body text-neutral-700 leading-relaxed mb-6 italic">
                  "{testimonial.text.substring(0, 150)}..."
                </p>
                <div className="flex items-center space-x-3">
                  <div>
                    <h4 className="font-heading font-semibold text-primary-500">
                      {testimonial.name}
                    </h4>
                    <p className="font-body text-sm text-neutral-600">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
              Video Testimonials
            </h2>
            <p className="font-body text-lg text-neutral-600">
              Hear directly from our satisfied clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => openVideoModal(video.videoUrl)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-heading font-semibold text-lg mb-1">
                      {video.title}
                    </h3>
                    <p className="font-body text-sm opacity-90">
                      {video.client}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-3xl">
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow hover:bg-neutral-100"
              >
                <X className="h-6 w-6 text-neutral-800" />
              </button>
              <video controls autoPlay className="w-full h-full">
                <source src={selectedVideoUrl || ''} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Trusted Partners */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Trusted Partners
            </h2>
            <p className="font-body text-lg text-primary-100">
              We work with the best in the industry to deliver excellence
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* HDFC Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/HDFC.png" 
                alt="HDFC Bank"
                className="w-full h-15 object-contain"
              />
            </div>
             {/* SBI Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/SBI.png" 
                alt="SBI Bank"
                className="w-full h-15 object-contain"
              />
            </div>
             {/* ICICI Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/ICICI.png" 
                alt="ICICI Bank"
                className="w-full h-15 object-contain"
              />
            </div>
             {/* Asian Paints Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/asian.png" 
                alt="Asian Paints"
                className="w-full h-15 object-contain"
              />
            </div>
             {/* Kajaria Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/Kajaria.webp" 
                alt="Kajaria"
                className="w-full h-15 object-contain"
              />
            </div>
             {/* Ambuja Logo */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors animate-fade-in">
              <img 
                src="/testimonials/AmbujaCement.png"
                alt="Ambuja"
                className="w-full h-15 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;