import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

const TabButton = ({ active, selectTab, children }: TabButtonProps) => {
  return (
    <button onClick={selectTab}>
      <p
        className={clsx(
          active && 'text-primary',
          'hover:text-primary font-medium',
          'mr-3'
        )}
      >
        {children}
      </p>

      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className='bg-primary mr-3 h-[2px]'
      ></motion.div>
    </button>
  );
};

export default TabButton;
