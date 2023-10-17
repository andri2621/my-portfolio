import clsx, { ClassValue } from 'clsx';
import { RefObject, useEffect } from 'react';
import { Events, scrollSpy } from 'react-scroll';
import { twMerge } from 'tailwind-merge';

/** Merge classes with tailwind-merge with clsx full feature */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useClickOutside(
  ref: RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
        handler();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref, handler]);
}

export function useReactScrollWithFixedNavbar(
  handleScrollBegin: (to: string, element: HTMLElement) => void
) {
  const handleScrollNav = () => {
    const nav = document.querySelector<HTMLElement>('#navbar-top');

    if (nav) {
      const fixedNav: number = nav.offsetTop;
      if (window.scrollY > fixedNav) {
        nav.classList.add('navbar-fixed');
      } else {
        nav.classList.remove('navbar-fixed');
      }
    }
  };

  useEffect(() => {
    // Check scroll position on component mount
    handleScrollNav();
    // Add scroll listener
    window.addEventListener('scroll', handleScrollNav);

    //===========================
    const handleScroll = (to: string, element: HTMLElement) => {
      handleScrollBegin(to, element); // Call the custom handler
    };

    Events.scrollEvent.register('begin', handleScroll);
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, [handleScrollBegin]);
}
