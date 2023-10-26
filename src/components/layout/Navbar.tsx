'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { useFixedNavOnScroll } from '@/hooks/useFixedNavOnScroll';

import ModalSetting from '@/components/settings/ModalSetting';
import ThemeToggle from '@/components/settings/ThemeToggle';

import { NavigationData } from '@/constant/config';
import { Icons } from '@/constant/IconsData';

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
        className='navbar-top absolute left-0 right-0 top-0 z-10 transition-shadow'
      >
        <div className='layout flex items-center justify-between py-4'>
          {/* Logo */}
          <div className='mb-0 mt-0 flex flex-row gap-4 lg:items-center lg:gap-6'>
            <Link
              href='/#home'
              className='text-primary inline-block text-lg font-bold'
            >
              <Icons.logo className='inline-block h-6 w-6' />
              <span className='ml-2'>Awandri</span>
            </Link>
          </div>

          {/* NAVIGATION LINKS ON > MEDIUM DEVICE */}
          <div className=' hidden items-center gap-4  sm:flex'>
            {NavigationData.map((nav) => (
              <Link
                href={nav.link}
                key={nav.id}
                className={cn('hover:!text-primary/50', {
                  'active font-medium': activePage === nav.link,
                })}
              >
                {nav.label}
              </Link>
              // </li>
            ))}
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
