// import dynamic from 'next/dynamic';

import ContactSection from '@/app/(home)/ContactSection';
import FeaturedBlogs from '@/app/(home)/FeaturedBlogs';
import HomeSection from '@/app/(home)/HomeSection';
import IntroSection from '@/app/(home)/IntroSection';
import PortfolioSection from '@/app/(home)/PortfolioSection';

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <IntroSection />
      <PortfolioSection />
      <FeaturedBlogs />
      <ContactSection />
    </>
  );
};

export default HomePage;
