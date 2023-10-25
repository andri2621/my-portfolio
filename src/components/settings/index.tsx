'use client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import { PiGearFill, PiMoonFill, PiSunFill } from 'react-icons/pi';

import { useClickOutside } from '@/hooks/useClickOutside';

import ReactScroll from '@/components/links/ReactScroll';

import { NavigationData } from '@/constant/config';

const Setting = () => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      <div
        className={clsx(!mounted ? 'cursor-not-allowed' : 'cursor-pointer')}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
      >
        <PiGearFill size={24} className='text-primary h-6 w-6' />
      </div>

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
              className='bg-base-200 menu shadow-3xl dark:shadow-4xl w-max rounded-lg border-none p-2 text-black outline-none hover:text-black  dark:text-white dark:hover:text-white'
            >
              {/* <LocaleChanger /> */}

              {NavigationData.map((nav) => (
                <li key={nav.id}>
                  <ReactScroll
                    to={nav.value}
                    href={nav.link}
                    className='w-full px-2 py-2'
                  >
                    {nav.value}
                  </ReactScroll>
                </li>
              ))}

              <hr className='my-1 border-slate-500' />

              <li onClick={handleToggle}>
                <div className='w-full px-2 py-2'>
                  <div
                    className={clsx(
                      'flex items-center gap-2',
                      theme === 'emerald' && 'hidden'
                    )}
                  >
                    <PiSunFill size={16} className='' />
                    <span>Light Mode</span>
                  </div>
                  <div
                    className={clsx(
                      'flex items-center gap-2',
                      theme === 'night' && 'hidden'
                    )}
                  >
                    <PiMoonFill size={16} className='' />
                    <span>Dark Mode</span>
                  </div>
                </div>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Setting;
