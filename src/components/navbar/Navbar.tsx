'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCloudRain } from 'react-icons/fa';
import { Events, scrollSpy } from 'react-scroll';

import { handleScrollNav } from '@/lib/utils';

import ScrollableLink from '@/components/links/ScrollableLink';
import Setting from '@/components/Settings';

import { NavigationData } from '@/constant/NavigationData';

const Logo = () => (
  <Link href='/#home' className='text-primary block text-lg font-bold'>
    <FaCloudRain className='2xl inline-block' size={36} />
    <span className='ml-2'>Awandri</span>
  </Link>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (to: string) => {
    setActiveSection(to);
  };

  const handleScrollBegin = (to: string, element: HTMLElement) => {
    const navbarTop = document.querySelector<HTMLElement>('#navbar-top');
    const elementPosition = element.offsetTop;
    if (elementPosition > 0) {
      navbarTop?.classList.add('navbar-fixed');
    } else {
      navbarTop?.classList.remove('navbar-fixed');
    }
    setActiveSection(to);
  };

  useEffect(() => {
    // Registering the named 'begin' event when mount and triggered.
    Events.scrollEvent.register('begin', handleScrollBegin);
    // Updating scrollSpy when the component mounts.
    scrollSpy.update();
    // Clear event listeners when the component unmounts.
    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  useEffect(() => {
    // Add scroll listener to add class navbar-fixed
    window.addEventListener('scroll', handleScrollNav);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScrollNav);
    };
  }, []);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        id='navbar-top'
        className='navbar-top navbar-fixed absolute left-0 right-0 top-0 z-10 flex w-full items-center'
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
                    <ScrollableLink
                      to={nav.value}
                      href={nav.link}
                      smooth={true}
                      spy={true}
                      hashSpy={true}
                      onSetActive={handleSetActive}
                      className={clsx(
                        activeSection === nav.value && 'text-primary',
                        'hover:text-primary dark:hover:text-primary flex items-center transition-colors'
                      )}
                    >
                      {nav.label}
                    </ScrollableLink>
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

      {/* BOTTOM NAVBAR */}
      {activeSection === '' ? (
        <div className='navbar-bottom fixed bottom-5 z-50 flex w-full items-center justify-center md:hidden'>
          <ul className='menu menu-horizontal rounded-box dark:border-cupcake/30 border-night/30 h-[52px] w-[242px] gap-2 border bg-slate-500/30 shadow-md backdrop-blur-sm'></ul>
        </div>
      ) : (
        <nav className='navbar-bottom fixed bottom-5 z-50 flex w-full items-center justify-center md:hidden'>
          <ul className='menu menu-horizontal rounded-box dark:bg-night/20 bg-cupcake/20 dark:border-cupcake/30 border-night/30 gap-2 border shadow-md backdrop-blur-sm'>
            {NavigationData.map((nav) => (
              <li key={nav.id}>
                <ScrollableLink
                  to={nav.value}
                  href={nav.link}
                  smooth={true}
                  spy={true}
                  hashSpy={true}
                  onSetActive={handleSetActive}
                  className={clsx(
                    activeSection === nav.value
                      ? 'dark:!text-night !bg-primary !text-cupcake'
                      : 'dark:text-cupcake text-night'
                  )}
                >
                  <nav.icon size={18} />
                </ScrollableLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
