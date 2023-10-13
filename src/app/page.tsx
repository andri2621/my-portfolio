import Navbar from '@/components/navbar/Navbar';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HomeSection from '@/components/sections/HomeSection';
import PortfolioSection from '@/components/sections/PortfolioSection';

const TestPage = () => {
  return (
    <>
      {/* NAVBAR TOP AND BOTTOM  */}
      <Navbar />
      {/* LANDING PAGE CONTENT */}
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default TestPage;
