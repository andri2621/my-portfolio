'use client';

import { AnimatePresence, motion } from 'framer-motion';
import * as React from 'react';

import { cn } from '@/lib/utils';

type Props = {
  text: string;
  children: React.ReactNode;
  variant?: string;
};

const Tooltip = ({ text, children, variant = 'center' }: Props) => {
  const [isHover, setIsHover] = React.useState(false);

  let posX = '-50%';

  if (variant === 'left') {
    posX = '5rem';
  } else if (variant === 'right') {
    posX = '-5rem';
  }

  const variantsMotion = {
    hidden: {
      opacity: 0,
      x: posX,
      y: '2rem',
      scale: 0,
    },
    visible: {
      opacity: 1,
      x: variant === 'center' ? '-50%' : 0,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: posX,
      y: '2rem',
      scale: 0,
    },
  };

  return (
    <div className='group relative'>
      <motion.div
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={variantsMotion.hidden}
            animate={variantsMotion.visible}
            exit={variantsMotion.hidden}
            transition={{ duration: 0.3 }}
            className={cn(
              { 'bottom-8 left-1/2': variant === 'center' },
              { 'bottom-8 left-0': variant === 'right' },
              { 'bottom-8 right-0': variant === 'left' },

              'absolute z-[100]',
              'bg-base-200 text-base-content rounded-md px-2 py-2',
              'w-full min-w-max',
              'text-xs sm:text-base'
            )}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
