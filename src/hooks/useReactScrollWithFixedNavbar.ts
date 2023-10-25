import * as React from 'react';
import { Events, scrollSpy } from 'react-scroll';

export function useReactScrollWithFixedNavbar(
  handleScrollBegin: (to: string, element: HTMLElement) => void
) {
  const handleScrollNav = () => {
    // Fixed navbar
    const nav = document.querySelector<HTMLElement>('#navbar-top');
    if (nav) {
      const fixedNav = nav.offsetTop;
      const isFixed = window.scrollY > fixedNav;
      nav.classList.toggle('navbar-fixed', isFixed);
    }
  };

  React.useEffect(() => {
    // Check scroll position on component mount
    handleScrollNav();
    window.addEventListener('scroll', handleScrollNav);

    //===========================
    const handleScroll = (to: string, element: HTMLElement) => {
      handleScrollBegin(to, element); // Call the custom handler
    };

    Events.scrollEvent.register('begin', handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener('scroll', handleScrollNav);
      Events.scrollEvent.remove('begin');
    };
  }, [handleScrollBegin]);
}
