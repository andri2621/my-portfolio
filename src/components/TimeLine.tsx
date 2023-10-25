'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useRef } from 'react';

import { fadeIn } from '@/lib/motion';

interface TimelineData {
  title: string;
  date: string;
  desc?: string;
  link?: string;
  at?: string;
  school?: string;
}

interface TimelineProps {
  data: TimelineData[];
}

const TimeLine: React.FC<TimelineProps> = ({ data }) => {
  const ref = useRef(null);

  return (
    <ol
      ref={ref}
      className='relative border-l border-gray-200 dark:border-gray-700'
    >
      {data.map((item, index) => (
        <motion.li
          className='mb-10 ml-4'
          variants={fadeIn('up', 'spring', index * 0.3, 0.5)}
          viewport={{ once: true, amount: 0.25 }}
          initial='hidden'
          whileInView='show'
          key={index}
        >
          <div className='bg-primary dark:bg-primary absolute -left-1.5 mt-2 h-3 w-3 rounded-full'></div>
          <div className='flex flex-col sm:flex-row sm:items-center sm:gap-2'>
            <h3 className='text-base font-semibold leading-none text-gray-900 dark:text-white md:text-lg'>
              {item.title}
            </h3>
            <time className='mt-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {item.date}
            </time>
          </div>
          {item.link ? (
            <Link
              href={item.link}
              target='_blank'
              className='text-primary cursor-newtab'
            >
              @{item.at}
            </Link>
          ) : (
            <span className='text-primary cursor-newtab'> @{item.at}</span>
          )}
          <h5 className='text-primary'>{item.school}</h5>
          <p className='my-4 text-sm font-normal text-gray-500 dark:text-gray-400 md:text-base'>
            {item.desc}
          </p>
        </motion.li>
      ))}
    </ol>
  );
};

export default TimeLine;
