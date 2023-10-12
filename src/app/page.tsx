'use client';

import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HomeSection from '@/components/sections/HomeSection';
import PortfolioSection from '@/components/sections/PortfolioSection';

const TestPage = () => {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
};

export default TestPage;
