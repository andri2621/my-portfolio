'use client';

import { motion } from 'framer-motion';
import React from 'react';

import ExpandingArrow from '@/components/ExpandingArrow';
import UnstyledLink from '@/components/links/UnstyledLink';

const HomeSection = () => {
  return (
    <section id='home' className='hero min-h-screen place-items-center py-24'>
      <div className='flex w-full flex-wrap items-center justify-center gap-y-12 text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-3xl'
        >
          <div className='text-primary text-base font-semibold sm:text-2xl'>
            Hi, my name is
          </div>

          <div className='text-neutral block text-3xl font-black dark:text-white sm:text-5xl'>
            Andi Setiawan
          </div>

          <h2 className='text-base-content text-base font-medium sm:text-2xl'>
            I&apos;am
            <span className='text-primary ml-2 text-xl sm:text-3xl'>
              Frontend Developer
            </span>
          </h2>

          <p className='text-base-content/60 my-4 text-base leading-5 sm:text-lg/normal'>
            Passionate about crafting beautiful and user-friendly websites. I
            specialize in the React ecosystem and am proficient in Next.js.
            Let's create something amazing together!
          </p>

          {/* CTA */}
          <div className='flex flex-wrap justify-center gap-x-2 gap-y-4'>
            <UnstyledLink href='#contact' className='btn btn-primary  btn-sm '>
              CONTACT ME
            </UnstyledLink>

            <UnstyledLink
              href='/about'
              className='btn btn-primary hover:!bg-primary/20 hover:!text-primary btn-outline btn-sm group'
            >
              <span>ABOUT ME</span>
              <ExpandingArrow />
            </UnstyledLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
