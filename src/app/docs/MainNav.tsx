'use client';

import Link from 'next/link';
import * as React from 'react';

import { siteConfig } from '@/constant/config';
import { Icons } from '@/constant/IconsData';

import { MainNavItem } from '@/types';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export default function MainNav({ items, children }: MainNavProps) {
  // const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className='flex gap-6 md:gap-10'>
      <Link href='/' className='hidden items-center space-x-2 md:flex'>
        <Icons.logo />
        <span className='hidden font-bold sm:inline-block'>
          {siteConfig.name}
        </span>
      </Link>

      <button
        className='flex items-center space-x-2 md:hidden'
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {/* {showMobileMenu ? <Icons.close /> : <Icons.logo />} */}
        <span className='font-bold'>Menu</span>
      </button>
      {showMobileMenu && items && (
        <>
          {children}
          {/* <MobileNav items={items}>{children}</MobileNav> */}
          <div>Navigation Mobile</div>
        </>
      )}
    </div>
  );
}
