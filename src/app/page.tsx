import dynamic from 'next/dynamic';

const HomeSection = dynamic(() => import('@/app/(landing-page)/HomeSection'), {
  ssr: true,
});

const IntroSection = dynamic(
  () => import('@/app/(landing-page)/IntroSection'),
  {
    ssr: true,
  }
);

const PortfolioSection = dynamic(
  () => import('@/app/(landing-page)/PortfolioSection'),
  { ssr: true }
);
const ContactSection = dynamic(
  () => import('@/app/(landing-page)/ContactSection'),
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
