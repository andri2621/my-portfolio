'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { PiMoonFill, PiSunFill } from 'react-icons/pi';

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='h-4 w-4 animate-pulse rounded-full bg-slate-500'></div>
    );
  }

  function handleToggle() {
    setTheme(theme === 'night' ? 'emerald' : 'night');
  }

  return (
    <>
      <div className='w-full cursor-pointer p-2' onClick={handleToggle}>
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
    </>
  );
};

export default ThemeChanger;
