import { motion } from 'framer-motion';
import React from 'react';

import { staggerContainer } from '@/lib/motion';

const DivWrapper = (Component: React.FC, className?: string) => {
  const HOC: React.FC = () => {
    return (
      <motion.div
        variants={staggerContainer(0, 0)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={className}
      >
        <Component />
      </motion.div>
    );
  };

  return HOC;
};

export default DivWrapper;
