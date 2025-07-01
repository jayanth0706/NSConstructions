import { ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-primary-500/90 to-primary-700/70">
          <img
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Construction Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-700/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Building Dreams,<br />
            <span className="text-accent-500">Crafting Legacies</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience excellence in construction with Hyderabad's most trusted builders. 
            20+ years of creating exceptional homes and commercial spaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="group bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-body font-semibold flex items-center space-x-2 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Explore Projects</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;