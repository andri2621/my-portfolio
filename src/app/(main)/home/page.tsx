import dynamic from 'next/dynamic';

const HomeSection = dynamic(() => import('@/app/(main)/home/HomeSection'), {
  ssr: true,
});

const IntroSection = dynamic(() => import('@/app/(main)/home/IntroSection'), {
  ssr: true,
});

const PortfolioSection = dynamic(
  () => import('@/app/(main)/home/PortfolioSection'),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/app/(main)/home/ContactSection'),
  { ssr: true }
);

const HomePage = () => {
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

export default HomePage;
