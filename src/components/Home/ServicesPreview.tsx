import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const services = [
    {
      icon: '/hservices/CServices.png',
      title: 'Construction',
      description: 'Turnkey solutions from design to delivery with uncompromising quality standards',
      features: ['Residential Projects', 'Commercial Buildings', 'Project Management']
    },
    {
      icon: '/hservices/InteriorServices.png',
      title: 'Interior Design',
      description: 'Luxury finishes tailored to your taste with contemporary and traditional styles',
      features: ['Space Planning', 'Custom Furniture', 'Premium Materials']
    },
    {
      icon: '/hservices/PropertyServices.png',
      title: 'Property Management',
      description: 'End-to-end maintenance and rental solutions for worry-free ownership',
      features: ['Maintenance Services', 'Rental Management', '24/7 Support']
    },
    {
      icon: '/hservices/LegalServices.png',
      title: 'Legal Consultation',
      description: 'Hassle-free documentation and compliance with expert legal guidance',
      features: ['Document Verification', 'Approval Process', 'Legal Compliance']
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-500 mb-4">
            Our Services
          </h2>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your real estate needs, from construction to after-sales support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-xl border border-neutral-100 hover:border-accent-200 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <img src={service.icon} alt={service.title} className="h-12 w-12 object-contain" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-primary-500 mb-3">
                {service.title}
              </h3>
              <p className="font-body text-neutral-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                    <span className="font-body text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <span>Learn More About Our Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
