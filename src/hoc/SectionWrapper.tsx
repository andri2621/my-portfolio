import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer } from '@/lib/motion';

const SectionWrapper = (
  Component: React.FC,
  idName: string,
  className?: string
) => {
  const HOC: React.FC = () => {
    return (
      <motion.section
        variants={staggerContainer(0, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        id={idName}
        className={clsx(className)}
      >
        <Component />
      </motion.section>
    );
  };

  return HOC;
};

export default SectionWrapper;
