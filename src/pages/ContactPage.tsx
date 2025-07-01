import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Calculator, Send } from 'lucide-react';
import EMICalculator from '../components/Contact/EMICalculator';

const SERVICE_ID = 'service_mpriju8';
const TEMPLATE_ID = 'template_fejzgad';
const PUBLIC_KEY = 'zgoie2SCETjL3DNd3';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          project: formData.project,
          message: formData.message
        },
        PUBLIC_KEY
      );

      alert('Thank you for your inquiry! Our team will contact you within 24 hours.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        project: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Something went wrong. Please try again later.');
    }

    setIsSubmitting(false);
  };

  const projects = ['Villa', 'Apartments', 'Commercial', 'Plots', 'Other'];

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-500 mb-4">
            Contact Us
          </h1>
          <p className="font-body text-lg text-neutral-600 max-w-2xl mx-auto">
            Ready to start your journey with us? Get in touch today and let's build your dream together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-primary-500 mb-8">
              Get In Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                    Our Office
                  </h3>
                  <p className="font-body text-neutral-600">
                    NS Towers, Plot No. 123<br />
                    Uppal, Hyderabad<br />
                    Telangana 500039
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                    Phone Numbers
                  </h3>
                  <p className="font-body text-neutral-600">
                    Sales: +91 7981976192<br />
                    Support: +040 12345678
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                    Email Address
                  </h3>
                  <p className="font-body text-neutral-600">
                    nssupportteam@gmail.com<br />
                    sales@nsconstructions.in
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-primary-500 mb-1">
                    Business Hours
                  </h3>
                  <p className="font-body text-neutral-600">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="font-heading font-bold text-2xl text-primary-500 mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-body font-medium text-neutral-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-body font-medium text-neutral-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 12345 67890"
                  />
                </div>
                <div>
                  <label className="block font-body font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-body font-medium text-neutral-700 mb-2">
                  Project Interest
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a project</option>
                  {projects.map((project) => (
                    <option key={project} value={project}>
                      {project}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-body font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white py-4 rounded-lg font-body font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mb-16">
          <h2 className="font-heading font-bold text-3xl text-primary-500 text-center mb-8">
            Find Our Office
          </h2>
          <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3810.801153952538!2d78.4405181151391!3d17.43679298756553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb94f833333333%3A0xb79ddabbcc94e781!2sParade%20Ground%20Metro%20Station!5e0!3m2!1sen!2sin!4v1719406200000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>



        {/* EMI Calculator */}
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-50 h-50 bg-gradient-to-r from-primary-500 rounded-full mb-4">
              <img src="/contact/EMI.png" alt="Calculator" className="h-12 w-12 text-white" />
            </div>
            <h2 className="font-heading font-bold text-3xl text-primary-500 mb-4">
              EMI Calculator
            </h2>
            <p className="font-body text-lg text-neutral-600">
              Calculate your monthly EMI and plan your investment
            </p>
          </div>
          <EMICalculator />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
