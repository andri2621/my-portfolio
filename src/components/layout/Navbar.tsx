'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';
import { FaCloudRain } from 'react-icons/fa';

import { cn } from '@/lib/utils';
import { useFixedNavOnScroll } from '@/hooks/useFixedNavOnScroll';

import ModalSetting from '@/components/settings/ModalSetting';
import ThemeToggle from '@/components/settings/ThemeToggle';

import { NavigationData } from '@/constant/config';

const Logo = () => (
  <Link href='/#home' className='text-primary block text-lg font-bold'>
    <FaCloudRain className='2xl inline-block' size={36} />
    <span className='ml-2'>Awandri</span>
  </Link>
);

const Navbar = () => {
  const [activePage, setActivePage] = React.useState('/home');
  const pathName = usePathname();

  React.useEffect(() => {
    const arrRoute = pathName.split('/');
    const currentRoute = '/' + arrRoute[1];
    setActivePage(currentRoute);
  }, [pathName]);

  useFixedNavOnScroll();

  return (
    <>
      <nav
        id='navbar-top'
        // className='layout'
        className='navbar-top absolute left-0 right-0 top-0 z-10 transition-shadow'
      >
        <div className='layout flex items-center justify-between py-4'>
          {/* Logo */}
          <Logo />

          {/* NAVIGATION LINKS ON > MEDIUM DEVICE */}
          <div className=' hidden items-center gap-4  sm:flex'>
            <ul className='flex flex-row gap-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6'>
              {NavigationData.map((nav) => (
                <li
                  className={cn('p-1', 'hover:!text-primary/50', {
                    active: activePage === nav.link,
                  })}
                  key={nav.id}
                >
                  <Link href={nav.link}>{nav.label}</Link>
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
      </nav>

      {/* )} */}
    </>
  );
};

export default Navbar;
