// import AboutSection from '@/components/sections/AboutSection';
// import ContactSection from '@/components/sections/ContactSection';
// import HomeSection from '@/components/sections/HomeSection';
// import PortfolioSection from '@/components/sections/PortfolioSection';

import dynamic from 'next/dynamic';

const HomeSection = dynamic(() => import('@/components/sections/HomeSection'), {
  ssr: false,
});
const AboutSection = dynamic(
  () => import('@/components/sections/AboutSection'),
  { ssr: false }
);
const PortfolioSection = dynamic(
  () => import('@/components/sections/PortfolioSection'),
  { ssr: false }
);
const ContactSection = dynamic(
  () => import('@/components/sections/ContactSection'),
  { ssr: false }
);

const TestPage = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default TestPage;
