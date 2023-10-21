'use client';
import React from 'react';

import BubleChat from '@/components/BubleChat';

const IntroSection = () => {
  return (
    <section
      id='intro'
      className='flex w-full flex-col-reverse items-center justify-center gap-8 py-32 md:min-h-full md:flex-row lg:min-h-screen'
    >
      {/* LEFT */}
      <div className='w-full md:w-2/5'>
        <BubleChat />
      </div>
      {/* RIGHT */}
      <div className='w-full  md:w-3/5'>
        <span className='text-primary decoration-clone text-3xl font-black leading-none lg:text-5xl'>
          Welcome to my digital playground!
        </span>
        <p className='mt-5'>
          a space where I showcase my{' '}
          <span className='font-bold text-white'>projects</span>, share my{' '}
          <span className='font-bold text-white'>experiences</span>, write
          personal documentation about what I've learned, and express my
          thoughts about web development.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;
