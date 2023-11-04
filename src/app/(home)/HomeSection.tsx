'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidFilePdf } from 'react-icons/bi';

import LiquidBlob from '@/components/icons/LiquidBlob';
import ReactScroll from '@/components/links/ReactScroll';

import MyPhoto from '~/images/MyPhoto.png';

const HomeSection = () => {
  return (
    <section
      id='home'
      className='hero min-h-screen place-items-start py-24 md:min-h-full md:place-items-center lg:min-h-screen'
    >
      <div className='flex w-full flex-wrap'>
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='w-full self-center md:w-1/2 lg:w-3/5 '
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
            {/* Welcome to my digital playground, a space where I proudly showcase
              my projects, share my experiences, write personal documentation
              about what I've learned, and express my thoughts about web
              development. */}
            {/* I work with react ecosystem, proficient with TypeScript and
              NextJS. Currently iam a full-time worker at CodeID, where i
              involved on several projects. */}
            Passionate about crafting beautiful and user-friendly websites. I
            specialize in the React ecosystem and am proficient in TypeScript
            and Next.js. Let's create something amazing together!
          </p>

          {/* CTA */}
          <div className='flex flex-wrap gap-2'>
            <Link href='resume' className='btn btn-primary btn-sm '>
              <BiSolidFilePdf size={18} />
              <span>RESUME</span>
            </Link>

            {/* </a> */}

            <ReactScroll
              to='contact'
              href='contact'
              className='btn btn-primary btn-outline btn-sm hover:!bg-primary/20 hover:!text-primary'
            >
              CONTACT ME
            </ReactScroll>
          </div>
        </motion.div>
        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex w-full justify-center self-center md:w-1/2 lg:w-2/5 lg:justify-end'
        >
          {/*  md:max-h-xs lg:max-h-sm */}
          <div className='box-image-blob relative mt-8 max-h-[18rem] max-w-[18rem] sm:mt-6 sm:max-h-[20rem] sm:max-w-[20rem] lg:max-h-full lg:w-full lg:max-w-md'>
            <Image
              alt='My Photo'
              src={MyPhoto}
              width={400}
              height={400}
              priority={true}
              quality={100}
              className='pointer-events-none h-full w-full'
            />
            <div className='absolute left-3 top-4 -z-10 h-full w-full -translate-x-1'>
              <LiquidBlob />
            </div>

            <div className='absolute left-3 top-4 -z-10 h-full w-full -translate-x-1 blur-[20px]'>
              <LiquidBlob />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSection;
