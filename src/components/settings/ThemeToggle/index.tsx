import clsx from 'clsx';
import { motion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span className='bg-neutral relative box-content flex h-6 w-14 animate-pulse overflow-hidden rounded-full p-1'></span>
    );
  }

  function handleToggle() {
    if (theme) {
      setTheme(theme === 'night' ? 'emerald' : 'night');
    } else {
      setTheme('system');
    }
  }

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 15,
  };

  // ========================================================

  const containerVariants: Variants = {
    night: {
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
        // delay: 0,
      },
      backgroundColor: '#14b8a6',
    },
    emerald: { backgroundColor: '#0f172a' },
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      <motion.div
        variants={containerVariants}
        initial={theme === 'night' ? 'emerald' : 'night'}
        exit={theme === 'night' ? 'emerald' : 'night'}
        animate={theme}
        className={clsx(
          'relative box-content flex h-6 w-14 overflow-hidden rounded-full p-1',
          theme === 'night' ? 'justify-end' : 'justify-start'
        )}
      >
        <motion.div
          layout
          animate={theme}
          style={{
            boxShadow:
              theme === 'night'
                ? 'inset 0px 13px white, inset 0px 13px 1px 1px white'
                : 'inset 0px 0px white, inset 0px 0px 0px 0px white',
            rotate: 90,
          }}
          className={clsx(
            theme === 'night' ? 'bg-transparent' : 'bg-white',
            'h-6 w-6 rounded-full'
          )}
          variants={{
            night: {
              boxShadow: 'inset 0px 13px white, inset 0px 13px 1px 1px white',
              rotate: 90,
              background: 'transparent',
            },
            emerald: {
              boxShadow: 'inset 0px 0px white, inset 0px 0px 0px 0px white',
              rotate: 90,
              background: 'white',
            },
          }}
          initial={false}
          transition={spring}
        />
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
