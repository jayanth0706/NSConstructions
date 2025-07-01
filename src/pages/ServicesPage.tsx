import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    {
      icon: '/services/CServices.png',
      title: 'Construction Services',
      description: 'Turnkey solutions from design to delivery with uncompromising quality standards',
      features: [
        'Residential Construction',
        'Commercial Buildings',
        'Project Management',
        'Quality Assurance',
        'Timely Delivery',
        'Modern Architecture'
      ],
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: '/services/InteriorServices.png',
      title: 'Interior Design',
      description: 'Luxury finishes tailored to your taste with contemporary and traditional styles',
      features: [
        'Space Planning',
        'Custom Furniture',
        'Premium Materials',
        '3D Visualization',
        'Lighting Design',
        'Color Consultation'
      ],
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: '/services/PropertyServices.png',
      title: 'Property Management',
      description: 'End-to-end maintenance and rental solutions for worry-free ownership',
      features: [
        'Maintenance Services',
        'Rental Management',
        '24/7 Support',
        'Tenant Screening',
        'Property Inspection',
        'Financial Reporting'
      ],
      image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: '/services/LegalServices.png',
      title: 'Legal Consultation',
      description: 'Hassle-free documentation and compliance with expert legal guidance',
      features: [
        'Document Verification',
        'Approval Process',
        'Legal Compliance',
        'Title Clearance',
        'Registration Support',
        'Tax Consultation'
      ],
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const faqs = [
    {
      question: 'How do I book a site visit?',
      answer: 'You can book a site visit by calling us at +91 7981976192 or filling out our contact form. Our team will schedule a convenient time for you to visit our projects.'
    },
    {
      question: 'What financing options are available?',
      answer: 'We have partnerships with leading banks like HDFC, SBI, and ICICI for home loans. We also provide assistance with loan processing and offer flexible payment plans.'
    },
    {
      question: 'Do you provide after-sales service?',
      answer: 'Yes, we provide comprehensive after-sales service including maintenance support, warranty coverage, and 24/7 customer service for all our projects.'
    },
    {
      question: 'What is the typical construction timeline?',
      answer: 'Construction timelines vary by project size. Apartments typically take 24-36 months, while villas take 18-24 months. We provide detailed timelines during project briefing.'
    },
    {
      question: 'Are your projects RERA approved?',
      answer: 'Yes, all our projects are RERA approved and comply with all regulatory requirements. We ensure complete transparency in all our dealings.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-500 mb-4">
            Our Services
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your real estate needs, from construction to after-sales support
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } animate-slide-up`}
            >
              <div className="lg:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="inline-flex items-center justify-center w-34 h-30 bg-gradient-to-r">
                  <img src={service.icon} alt={`${service.title} icon`} className="h-20 w-24" />
                </div>
                <h2 className="font-heading font-bold text-3xl text-primary-500 mb-4">
                  {service.title}
                </h2>
                <p className="font-body text-lg text-neutral-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                      <span className="font-body text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-lg text-neutral-600">
              Get answers to common questions about our services and projects
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md border border-neutral-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-primary-500">
                    {faq.question}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-accent-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="font-body text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
