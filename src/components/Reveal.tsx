import clsx from 'clsx';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

type Props = {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
};

const Reveal = ({ children, width = '100%' }: Props) => {
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  const isInView = useInView(ref, {
    once: true,
  });

  return (
    <div ref={ref} className={clsx(width, 'reveal')}>
      <motion.div
        // variants={{
        //   hidden: { opacity: 0, y: 100 },
        //   visible: { opacity: 1, y: 0 },
        // }}
        // initial='hidden'
        // animate={mainControls}
        // transition={{ duration: 0.5, ease: 'easeIn' }}
        // style={{
        //   transform: isInView ? 'none' : 'translateY(2.5rem)',
        //   opacity: isInView ? 1 : 0,
        //   transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
        // }}
        className={clsx(
          isInView ? 'transform-none opacity-100' : 'translate-y-24 opacity-0',
          'transition-all duration-500'
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
