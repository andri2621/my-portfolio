'use client';

import { motion } from 'framer-motion';
import React, { useRef } from 'react';

import { fadeIn } from '@/lib/motion';

import UnderlineLink from '@/components/links/UnderlineLink';

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

          <div className='flex flex-col gap-1'>
            <h3 className='text-base font-semibold leading-snug text-gray-900 dark:text-white md:text-lg'>
              {item.title}
            </h3>

            <time className='text-base-content text-sm font-normal leading-none'>
              {item.date}
            </time>

            <div>
              {item.link ? (
                <UnderlineLink
                  href={item.link}
                  target='_blank'
                  className='text-primary cursor-newtab w-max'
                >
                  @{item.at}
                </UnderlineLink>
              ) : (
                <div className='text-primary'> @{item.at}</div>
              )}
            </div>
          </div>
          {/* <h5 className='text-primary'>{item.school}</h5> */}
          <p className='text-base-content/70 my-4 text-sm font-normal md:text-base'>
            {item.desc}
          </p>
        </motion.li>
      ))}
    </ol>
  );
};

export default TimeLine;
