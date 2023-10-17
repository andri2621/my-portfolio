'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaCloudRain } from 'react-icons/fa';

import { useReactScrollWithFixedNavbar } from '@/lib/utils';

import ScrollableLink from '@/components/links/ScrollableLink';
import ModalSetting from '@/components/settings/ModalSetting';
import ThemeToggle from '@/components/settings/ThemeToggle';

import { NavigationData } from '@/constant/NavigationData';

const Logo = () => (
  <Link href='/#home' className='text-primary block text-lg font-bold'>
    <FaCloudRain className='2xl inline-block' size={36} />
    <span className='ml-2'>Awandri</span>
  </Link>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const pathName = usePathname();

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
            <Logo />

            {/* NAVIGATION LINKS ON > MEDIUM DEVICE */}
            <div className=' hidden items-center gap-4  sm:flex'>
              <ul className='my-2 flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6'>
                {pathName === '/' &&
                  NavigationData.map((nav) => (
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
              {/* <ThemeChanger /> */}
              <ThemeToggle />
            </div>
            {/* SHOW MODAL ON SMALL DEVICE, IF > , HIDE THE MODAL */}
            <div className='sm:hidden'>
              <ModalSetting />
            </div>
          </div>
        </div>
      </nav>

      {/* )} */}
    </>
  );
};

export default Navbar;
