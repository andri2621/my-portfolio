import { motion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Circle = (props: object) => {
  return (
    <motion.circle
      id='Oval'
      r='17.5px'
      initial={false}
      fill='#333'
      {...props}
    />
  );
};

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const size = 25;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className='bg-neutral animate-pulse rounded-full'
        style={{
          width: `${size * 2.1}px`,
          height: `${size}px`,
          borderRadius: `${size}px`,
          padding: `${size / 8}px`,
          boxSizing: 'content-box',
          display: 'flex',
          justifyContent: theme === 'night' ? 'flex-end' : 'flex-start',
          overflow: 'hidden',
          position: 'relative',
        }}
      ></div>
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
    damping: 30,
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

  const childVariants: Variants = {
    night: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
    emerald: {
      y: '-100px',
    },
  };

  return (
    <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
      <motion.div
        variants={containerVariants}
        initial={theme === 'night' ? 'emerald' : 'night'}
        exit={theme === 'night' ? 'emerald' : 'night'}
        animate={theme}
        style={{
          width: `${size * 2.1}px`,
          height: `${size}px`,
          borderRadius: `${size}px`,
          padding: `${size / 8}px`,
          boxSizing: 'content-box',
          display: 'flex',
          justifyContent: theme === 'night' ? 'flex-end' : 'flex-start',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            top: '25%',
            left: '15%',
            width: `${size * 0.3}px`,
            height: `${size * 0.3}px`,
            background: 'red',
            clipPath:
              'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
          }}
          key='star-1'
          variants={childVariants}
          transition={spring}
        ></motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '70%',
            left: '25%',
            width: `${size * 0.08}px`,
            height: `${size * 0.06}px`,
            borderRadius: '50%',
            background: 'green',
          }}
          key='object-1'
          variants={childVariants}
          transition={spring}
        ></motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '40%',
            left: '35%',
            width: `${size * 0.1}px`,
            height: `${size * 0.1}px`,
            background: 'yellow',
            borderRadius: '50%',
          }}
          key='circle-1'
          variants={childVariants}
          transition={spring}
        ></motion.div>
        <motion.div
          style={{
            position: 'absolute',
            top: '60%',
            left: '45%',
            width: `${size * 0.2}px`,
            height: `${size * 0.2}px`,
            background: 'blue',
            borderRadius: '58%',
            clipPath:
              'polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0 38%, 37% 38%)',
          }}
          key='star-2'
          variants={childVariants}
          transition={spring}
        ></motion.div>

        <motion.div
          style={{
            position: 'absolute',
            top: '25%',
            left: '55%',
            width: `${size * 0.08}px`,
            height: `${size * 0.08}px`,
            background: 'white',
            borderRadius: '50%',
          }}
          key='circle-2'
          variants={childVariants}
          transition={spring}
        ></motion.div>
        <Circle />
        <motion.div
          layout
          animate={theme}
          style={{
            boxShadow:
              theme === 'night'
                ? 'inset 0px 13px white, inset 0px 13px 1px 1px white'
                : 'inset 0px 0px white, inset 0px 0px 0px 0px white',
            rotate: 90,
            background: theme === 'night' ? 'transparent' : 'white',

            width: `${size}px`,
            height: `${size}px`,
            borderRadius: `${size}px`,
          }}
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
          className='knob'
          transition={spring}
        />
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
