'use client';
import React from 'react';

import BubbleChat from '@/components/BubbleChat';
import UnderlineLink from '@/components/links/UnderlineLink';

import RocketBox from '~/svg/RocketBox.svg';

const IntroSection = () => {
  return (
    <section
      id='intro'
      className='flex w-full flex-col-reverse items-center justify-center gap-4 py-32 md:min-h-full md:flex-row lg:min-h-screen'
    >
      {/* LEFT */}
      <div className='w-full md:w-2/5'>
        <figure className='mx-auto flex w-full max-w-[280px] flex-col items-center justify-center md:max-w-md'>
          <RocketBox />
          <figcaption className='text-xs'>
            <span className='mr-1'>Illustrations by</span>
            <UnderlineLink href='https://popsy.co/'>Popsy</UnderlineLink>
          </figcaption>
        </figure>
      </div>
      {/* RIGHT */}
      <div className='flex w-full flex-col md:w-3/5'>
        <span className='text-primary decoration-clone text-3xl font-black leading-none lg:text-5xl'>
          Welcome to my digital playground!
        </span>
        <p className='mb-5 mt-5'>
          a space where I showcase my{' '}
          <span className='text-base-content font-bold'>projects</span>, share
          my <span className='text-base-content font-bold'>experiences</span>,
          write personal documentation about what I've learned, and express my
          thoughts about web development.
        </p>
        <BubbleChat className='self-center' />
      </div>
    </section>
  );
};

export default IntroSection;
