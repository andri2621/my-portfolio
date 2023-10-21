// import AboutSection from '@/components/sections/AboutSection';
// import ContactSection from '@/components/sections/ContactSection';
// import HomeSection from '@/components/sections/HomeSection';
// import PortfolioSection from '@/components/sections/PortfolioSection';

import dynamic from 'next/dynamic';

const HomeSection = dynamic(() => import('@/app/(sections)/HomeSection'), {
  ssr: true,
});

const IntroSection = dynamic(() => import('@/app/(sections)/IntroSection'), {
  ssr: true,
});

const PortfolioSection = dynamic(
  () => import('@/app/(sections)/PortfolioSection'),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/app/(sections)/ContactSection'),
  { ssr: true }
);

const TestPage = () => {
  return (
    <>
      <HomeSection />
      <IntroSection />
      {/* <AboutSection /> */}
      <PortfolioSection />
      <ContactSection />
    </>
  );
};

export default TestPage;
