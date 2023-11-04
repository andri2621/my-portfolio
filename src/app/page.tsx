// import dynamic from 'next/dynamic';

import ContactSection from '@/app/(home)/ContactSection';
import FeaturedBlogs from '@/app/(home)/FeaturedBlogs';
import FeaturedProject from '@/app/(home)/FeaturedProject';
import HomeSection from '@/app/(home)/HomeSection';
import IntroSection from '@/app/(home)/IntroSection';

const HomePage = () => {
  return (
    <>
      <HomeSection />
      <IntroSection />
      <FeaturedProject />
      <FeaturedBlogs />
      <ContactSection />
    </>
  );
};

export default HomePage;
