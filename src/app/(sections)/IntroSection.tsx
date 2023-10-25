'use client';
import React from 'react';

import UnderlineLink from '@/components/links/UnderlineLink';

import RocketBox from '~/svg/RocketBox.svg';

const IntroSection = () => {
  return (
    <section id='intro'>
      <article className='flex flex-col-reverse items-center justify-center gap-8 py-32 md:min-h-full md:flex-row lg:min-h-screen'>
        {/* LEFT */}
        <div className='flex h-full w-full justify-center md:w-2/5'>
          {/* <BubleChat /> */}
          <figure className=' flex w-full max-w-xs flex-col items-center justify-center md:max-w-md'>
            <RocketBox />
            <figcaption className='text-xs'>
              <span className='mr-1'>Illustrations by</span>
              <UnderlineLink href='https://popsy.co/'>Popsy</UnderlineLink>
            </figcaption>
          </figure>
        </div>
        {/* RIGHT */}
        <div className='w-full  md:w-3/5'>
          <span className='text-primary decoration-clone text-3xl font-black capitalize leading-none lg:text-5xl'>
            Welcome To My Digital Playground!
          </span>
          <p className='mt-5'>
            a space where I showcase my{' '}
            <span className='text-base-content font-bold'>projects</span>, share
            my <span className='text-base-content font-bold'>experiences</span>,
            write personal documentation about what I've learned, and express my
            thoughts about web development.
          </p>
        </div>
      </article>
    </section>
  );
};

export default IntroSection;
