'use client';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

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

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleToggle() {
    setTheme(theme === 'night' ? 'cupcake' : 'night');
  }

  if (!mounted) {
    return (
      <div className='h-6 w-6 animate-pulse rounded-full bg-slate-500'></div>
    );
  }

  return (
    <div className='dropdown dropdown-bottom dropdown-end '>
      <label tabIndex={0}>
        <FontAwesomeIcon icon={faGear} className='dark:text-primary h-6 w-6' />
      </label>
      <ul
        tabIndex={0}
        className={clsx(
          'dark:bg-darkmodal dropdown-content menu  shadow-3xl dark:shadow-4xl z-[100] w-32 rounded-lg border-none bg-white p-2  text-black outline-none hover:text-black dark:text-white dark:text-white dark:hover:text-white '
        )}
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
    </div>
  );
};

export default Setting;