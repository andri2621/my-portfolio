'use client';

import Link from 'next/link';
import React from 'react';
import { BiSolidFilePdf } from 'react-icons/bi';

import LiquidBlob from '@/components/icons/LiquidBlob';
import ReactScroll from '@/components/links/ReactScroll';
import NextImage from '@/components/NextImage';

import MyPhoto from '~/images/MyPhoto.png';

const HomeSection = () => {
  return (
    <section
      id='home'
      className='hero min-h-screen place-items-start pt-24 md:min-h-full md:place-items-center lg:min-h-screen xl:pt-0'
    >
      <div className='flex flex-wrap'>
        {/* LEFT CONTENT */}
        <div className='w-full self-center md:w-1/2 lg:w-3/5'>
          <div className='text-primary text-base font-semibold md:text-xl'>
            Hi, my name is
          </div>
          <div className='text-neutral block text-3xl font-black dark:text-white lg:text-5xl'>
            Andi Setiawan
          </div>
          <h2 className='text-base-content/80 text-base font-medium  lg:text-2xl'>
            I&apos;am
            <span className='text-primary ml-2 text-xl lg:text-3xl'>
              Frontend Developer
            </span>
          </h2>
          <p className='text-base-content/50 mb-4 mt-4 text-sm leading-5 '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            ipsum expedita. Dolore vero ad est nostrum quae autem saepe aut et
            repudiandae magni.
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
        </div>
        {/* RIGHT CONTENT */}
        <div className='flex w-full justify-center self-center md:w-1/2 lg:w-2/5 lg:justify-end'>
          {/*  md:max-h-xs lg:max-h-sm */}
          <div className='box-image-blob relative mt-8 max-h-[18rem] max-w-[18rem] sm:mt-6 sm:max-h-[20rem] sm:max-w-[20rem] lg:max-h-full lg:w-full lg:max-w-md'>
            <NextImage
              alt='My Photo'
              src={MyPhoto}
              width={500}
              height={500}
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
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
