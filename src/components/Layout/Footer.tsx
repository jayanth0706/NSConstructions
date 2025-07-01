import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/footer/nslogo.png"
                alt="NS Constructions Logo"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="font-heading font-bold text-xl">NS Constructions</h3>
                <p className="text-sm text-primary-100">Building Dreams, Crafting Legacies</p>
              </div>
            </div>
            <p className="text-primary-100 mb-6 leading-relaxed">
              With over 20 years of excellence in construction, we've built more than 50 projects 
              and served 1000+ happy clients across Hyderabad. Your dream home is our commitment.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nsconstructions"
                className="p-2 bg-primary-600 rounded-lg hover:bg-accent-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/nsconstructions"
                className="p-2 bg-primary-600 rounded-lg hover:bg-accent-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Services', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-primary-100 hover:text-accent-500 transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-500 mt-0.5 flex-shrink-0" />
                <p className="text-primary-100 text-sm">
                  NS Towers, Gachibowli,<br />
                  Hyderabad, Telangana 500032
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <p className="text-primary-100 text-sm">+91 7981976192</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500 flex-shrink-0" />
                <p className="text-primary-100 text-sm">nsconstructions@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-100 text-sm">
            © 2025 NS Constructions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-100 hover:text-accent-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-100 hover:text-accent-500 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;