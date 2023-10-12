'use client';

import { faCloudRain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Setting from '@/components/Settings';

import { NavigationData } from '@/constant/NavigationData';

const Logo = () => (
  <Link href='/#home' className='text-primary block text-lg font-bold'>
    <FontAwesomeIcon icon={faCloudRain} size='2xl' />
    <span className='ml-2'>Awandri</span>
  </Link>
);

const NavbarTop = () => {
  const [activeRoute, setActiveRoute] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector<HTMLElement>('#navbar-top');
      const sectionsElements = Array.from(document.querySelectorAll('section'));

      if (nav) {
        const fixedNav: number = nav.offsetTop;
        if (window.scrollY > fixedNav) {
          nav.classList.add('navbar-fixed');
        } else {
          nav.classList.remove('navbar-fixed');
        }

        let currentSection = activeRoute;

        sectionsElements.forEach((section) => {
          const sectionOffsetTop = section.getBoundingClientRect().top;
          const offset = sectionOffsetTop - 200;

          if (window.scrollY >= offset) {
            currentSection = section.id;
          }
        });

        setActiveRoute(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeRoute]);

  return (
    <nav
      id='navbar-top'
      className='absolute left-0 right-0 top-0 z-10 flex w-full items-center'
    >
      <div className='container'>
        <div className='relative flex items-center justify-between py-4'>
          {/* Logo */}
          <div className='px-4'>
            <Logo />
          </div>
          {/* Navigation Links */}
          <div className='flex items-center gap-4 px-4'>
            <ul className='my-2 hidden flex-row gap-2 md:flex lg:mb-0 lg:mt-0 lg:items-center lg:gap-6'>
              {NavigationData.map((nav) => (
                <li className='p-1' key={nav.id}>
                  <a
                    href={nav.link}
                    className={clsx(
                      activeRoute == nav.value
                        ? 'text-primary dark:text-primary'
                        : 'text-neutral font-normal dark:text-white',
                      ' hover:text-primary dark:hover:text-primary flex items-center transition-colors'
                    )}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
            {/* Settings */}
            <Setting />
            {/* ======== */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarTop;
