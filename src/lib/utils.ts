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
  // Reference to the sections
  // const sectionsRef = useRef<HTMLElement[]>([]);

  const handleScrollNav = () => {
    // Fixed navbar
    const nav = document.querySelector<HTMLElement>('#navbar-top');
    if (nav) {
      const fixedNav = nav.offsetTop;
      const isFixed = window.scrollY > fixedNav;
      nav.classList.toggle('navbar-fixed', isFixed);
    }

    // Calculate viewport bounds
    // const screen = window.innerHeight - 200;
    // Add 'fade-in' class to sections in view
    // sectionsRef.current.forEach((section) => {
    //   const sectionTop = section.getBoundingClientRect().top;

    //   // if (sectionTop < screen && !section.classList.contains('fade-in')) {
    //   //   section.classList.add('fade-in');
    //   // }

    //   // Check if the section's child elements are within the viewport
    //   if (sectionTop < screen) {
    //     const childElements = section.querySelectorAll('*');
    //     childElements.forEach((child) => {
    //       if (!child.classList.contains('fade-in')) {
    //         child.classList.add('fade-in');
    //       }
    //     });
    //   }
    // });
  };

  useEffect(() => {
    // Initialize sections and calculate positions
    // sectionsRef.current = Array.from(
    //   document.querySelectorAll<HTMLElement>('section')
    // );

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
