import HeroSection from '../components/Home/HeroSection';
import FeaturedProjects from '../components/Home/FeaturedProjects';
import ServicesPreview from '../components/Home/ServicesPreview';
import TestimonialSnippet from '../components/Home/TestimonialSnippet';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <FeaturedProjects />
      <ServicesPreview />
      <TestimonialSnippet />
    </div>
  );
};

export default HomePage;