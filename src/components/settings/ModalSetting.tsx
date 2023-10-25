'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/useClickOutside';

import ReactScroll from '@/components/links/ReactScroll';
import CloseIcon from '@/components/settings/CloseIcon';
import HamburgerIcon from '@/components/settings/HamburgerIcon';
import ThemeChanger from '@/components/settings/ThemeChanger';

import { NavigationData } from '@/constant/NavigationData';

const ModalSetting = () => {
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
      <label htmlFor='toggle-modal' className='swap swap-rotate'>
        <input
          id='toggle-modal'
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
            className='absolute right-0 top-8 z-[100]'
          >
            <ul
              tabIndex={0}
              className='bg-base-200 menu shadow-3xl dark:shadow-4xl w-[135px] rounded-lg border-none p-2 text-black outline-none hover:text-black dark:text-white dark:hover:text-white'
            >
              {NavigationData.map((nav) => (
                <li key={nav.id}>
                  <ReactScroll
                    to={nav.value}
                    href={nav.link}
                    className='w-full p-2'
                  >
                    {nav.value}
                  </ReactScroll>
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

export default ModalSetting;
