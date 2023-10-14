'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import MoonIcon from '@/components/settings/ThemeChanger/MoonIcon';
import SunIcon from '@/components/settings/ThemeChanger/SunIcon';

const Moon = () => {
  return <MoonIcon className='mr-1 h-4 w-4 fill-current' />;
};

const Sun = () => {
  return <SunIcon className='mr-1 h-4 w-4 fill-current' />;
};

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
      <div className='w-full' onClick={handleToggle}>
        <div
          className={clsx('flex items-center', theme === 'emerald' && 'hidden')}
        >
          <Sun />
          <span>Light Mode</span>
        </div>
        <div
          className={clsx('flex items-center', theme === 'night' && 'hidden')}
        >
          <Moon />
          <span>Dark Mode</span>
        </div>
      </div>
    </>
  );
};

export default ThemeChanger;
