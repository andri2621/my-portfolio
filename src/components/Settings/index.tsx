'use client';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';

import { useClickOutside } from '@/lib/utils';

import LocaleChanger from '@/components/Settings/LocaleChanger';
import MoonIcon from '@/components/Settings/ThemeChanger/MoonIcon';
import SunIcon from '@/components/Settings/ThemeChanger/SunIcon';

const Moon = () => {
  return <MoonIcon className='mr-1 h-4 w-4 fill-current' />;
};

const Sun = () => {
  return <SunIcon className='mr-1 h-4 w-4 fill-current' />;
};

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
    setTheme(theme === 'night' ? 'cupcake' : 'night');
  }

  if (!mounted) {
    return (
      <div className='h-6 w-6 animate-pulse rounded-full bg-slate-500'></div>
    );
  }

  return (
    <div
      className='dropdown dropdown-bottom dropdown-end relative'
      ref={boxRef}
    >
      <div
        className='cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
      >
        <FontAwesomeIcon icon={faGear} className='text-primary h-6 w-6' />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='absolute right-0 top-10'
          >
            <ul
              tabIndex={0}
              className='dark:bg-darkmodal menu shadow-3xl dark:shadow-4xl z-[100] w-32 rounded-lg border-none bg-white p-2 text-black outline-none hover:text-black dark:text-white dark:text-white dark:hover:text-white'
            >
              <li>
                <LocaleChanger />
              </li>
              <hr className='my-1 border-slate-500' />
              {/* THEME SWITCHER */}
              <li onClick={handleToggle}>
                <div className='w-full px-2 py-2'>
                  <div
                    className={clsx(
                      'flex items-center',
                      theme === 'cupcake' && 'hidden'
                    )}
                  >
                    <Sun />
                    <span>Light Mode</span>
                  </div>
                  <div
                    className={clsx(
                      'flex items-center',
                      theme === 'night' && 'hidden'
                    )}
                  >
                    <Moon />
                    <span>Dark Mode</span>
                  </div>
                </div>
              </li>
              {/* END THEME SWITCHER */}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Setting;
