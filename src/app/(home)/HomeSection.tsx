'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import BubbleChat from '@/components/BubbleChat';
import ExpandingArrow from '@/components/ExpandingArrow';
import ReactScroll from '@/components/links/ReactScroll';

const HomeSection = () => {
  return (
    <section
      id='home'
      // className='hero min-h-screen place-items-start py-24 md:min-h-full md:place-items-center lg:min-h-screen'
      className='hero min-h-screen place-items-center py-24'
    >
      <div className='flex w-full flex-wrap gap-y-12'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full self-center md:w-7/12 lg:w-3/5 '
        >
          <div className='text-primary text-base font-semibold md:text-xl'>
            Hi, my name is
          </div>

          <div className='text-neutral block text-3xl font-black dark:text-white lg:text-5xl'>
            Andi Setiawan
          </div>

          <h2 className='text-base-content text-base font-medium  lg:text-2xl'>
            I&apos;am
            <span className='text-primary ml-2 text-xl lg:text-3xl'>
              Frontend Developer
            </span>
          </h2>

          <p className='text-base-content/60 text-md mb-4 mt-4  leading-5'>
            Passionate about crafting beautiful and user-friendly websites. I
            specialize in the React ecosystem and am proficient in Next.js.
            Let's create something amazing together!
          </p>

          {/* CTA */}
          <div className='flex flex-wrap gap-x-2 gap-y-4'>
            <ReactScroll
              to='contact'
              href='contact'
              className='btn btn-primary  btn-sm '
            >
              CONTACT ME
            </ReactScroll>

            <Link
              href='/about'
              className='btn btn-primary hover:!bg-primary/20 hover:!text-primary btn-outline btn-sm group'
            >
              <span>MORE ABOUT ME</span>
              <ExpandingArrow />
            </Link>
          </div>
        </motion.div>
        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex w-full justify-center self-center md:w-5/12 lg:w-2/5 lg:justify-end'
        >
          {/*  md:max-h-xs lg:max-h-sm */}
          <BubbleChat />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
