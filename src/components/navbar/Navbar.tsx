'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaCloudRain } from 'react-icons/fa';

import { useReactScrollWithFixedNavbar } from '@/lib/utils';

import ScrollableLink from '@/components/links/ScrollableLink';
import Setting from '@/components/settings';

import { NavigationData } from '@/constant/NavigationData';

const Logo = () => (
  <Link href='/#home' className='text-primary block text-lg font-bold'>
    <FaCloudRain className='2xl inline-block' size={36} />
    <span className='ml-2'>Awandri</span>
  </Link>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = (to: string) => {
    setActiveSection(to);
  };

  //add class navbar-fixed to navbar-top. and listening scroll events
  useReactScrollWithFixedNavbar(handleScroll);

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        id='navbar-top'
        className='navbar-top absolute left-0 right-0 top-0 z-10 flex w-full items-center'
      >
        <div className='layout'>
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
                      onSetActive={handleScroll}
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

      <AnimatePresence>
        {mounted && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='navbar-bottom fixed bottom-5 z-50 flex w-full items-center justify-center md:hidden'
          >
            <ul className='menu menu-horizontal rounded-box dark:bg-neutral/20 border-neutral/30 gap-2 border bg-white/20 shadow-md backdrop-blur-sm dark:border-white/30'>
              {NavigationData.map((nav) => (
                <li key={nav.id}>
                  <ScrollableLink
                    to={nav.value}
                    href={nav.link}
                    smooth={true}
                    spy={true}
                    hashSpy={true}
                    onSetActive={handleScroll}
                    className={clsx(
                      activeSection === nav.value
                        ? 'dark:!text-neutral !bg-primary !text-white'
                        : 'dark:text-base-content text-black '
                    )}
                  >
                    <nav.icon size={18} />
                  </ScrollableLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* )} */}
    </>
  );
};

export default Navbar;
