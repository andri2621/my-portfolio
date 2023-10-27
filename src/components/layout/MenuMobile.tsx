'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useClickOutside } from '@/hooks/useClickOutside';

import UnstyledLink from '@/components/links/UnstyledLink';
import CloseIcon from '@/components/settings/CloseIcon';
import HamburgerIcon from '@/components/settings/HamburgerIcon';
import ThemeChanger from '@/components/settings/ThemeChanger';

import { NavigationData } from '@/constant/config';

type MenuMobileProps = {
  activePage: string;
};

const MenuMobile = ({ activePage }: MenuMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const boxRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(boxRef, () => {
    setIsOpen(false);
  });

  function handleToggle() {
    setTheme(theme === 'night' ? 'emerald' : 'night');
  }

  return (
    <div
      className='dropdown dropdown-bottom dropdown-end relative'
      ref={boxRef}
    >
      {/* TRIGGER BUTTON */}
      <label htmlFor='toggle-menu-mobile' className='swap swap-rotate'>
        <input
          id='toggle-menu-mobile'
          type='checkbox'
          className='hidden'
          checked={isOpen}
          tabIndex={0}
          onChange={() => setIsOpen((prev) => !prev)}
        />

        {/* hamburger icon */}
        <HamburgerIcon className='swap-off fill-primary' />

        <CloseIcon className='swap-on fill-primary' />
        {/* close icon */}
      </label>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='absolute right-0 top-8 z-[999]'
          >
            <ul
              tabIndex={0}
              className='bg-base-200 menu shadow-3xl dark:shadow-4xl w-[135px] rounded-lg border-none p-2 text-black outline-none hover:text-black dark:text-white dark:hover:text-white'
            >
              {NavigationData.map((nav) => (
                <li key={nav.id}>
                  <UnstyledLink
                    href={nav.link}
                    className={cn(
                      { active: nav.link === activePage },
                      'w-full p-2'
                    )}
                  >
                    {nav.value}
                  </UnstyledLink>
                </li>
              ))}

              <hr className='my-1 border-slate-500' />

              <li onClick={handleToggle}>
                <ThemeChanger />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuMobile;
