import * as React from 'react';

export function useFixedNavOnScroll() {
  const handleScrollNav = () => {
    const navbarTop = document.querySelector<HTMLElement>('#navbar-top');

    if (navbarTop) {
      const isFixed = window.scrollY > 0;
      navbarTop.classList.toggle('navbar-fixed', isFixed);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollNav);

    return () => {
      window.removeEventListener('scroll', handleScrollNav);
    };
  }, []);
}
