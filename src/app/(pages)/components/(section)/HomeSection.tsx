'use client';

import Link from 'next/link';
import React from 'react';

import NextImage from '@/components/NextImage';

import MyPhoto from '~/images/MyPhoto.png';
import LiquidBlob from '~/svg/LiquidBlob.svg';

interface BlobImageSVGProps {
  alt: string;
}

const BlobImageSVG = ({ alt }: BlobImageSVGProps) => {
  return (
    <NextImage
      alt={alt}
      src={LiquidBlob}
      width={500}
      height={500}
      priority={true}
      quality={100}
      className='h-full w-full'
    />
  );
};

const HomeSection = () => {
  return (
    <section
      id='home'
      className='hero place-items-start pt-24 md:place-items-center xl:min-h-screen xl:pt-0'
    >
      <div className='container'>
        <div className='flex flex-wrap'>
          {/* LEFT CONTENT */}
          <div className='w-full self-center px-4 md:w-1/2 lg:w-3/5'>
            <div className='text-base font-semibold md:text-xl'>
              Hi, my name is
            </div>
            <div className='text-neutral block text-3xl font-black dark:text-white lg:text-5xl'>
              Andi Setiawan
            </div>
            <h2 className='text-neutral text-base font-medium dark:text-white lg:text-2xl'>
              I&apos;am
              <span className='text-primary ml-2 text-xl lg:text-3xl'>
                Frontend Developer
              </span>
            </h2>
            <p className='text-darkpale mb-4 mt-4 text-sm leading-5 '>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
              ipsum expedita. Dolore vero ad est nostrum quae autem saepe aut et
              repudiandae magni.
            </p>

            <Link
              href='#'
              className='btn btn-primary btn-sm text-neutral md:btn-md text-xs'
            >
              DOWNLOAD CV
            </Link>
            <Link
              href='#contact'
              className='btn btn-primary btn-outline btn-sm md:btn-md ml-4 text-xs'
            >
              CONTACT ME
            </Link>
          </div>
          {/* RIGHT CONTENT */}
          <div className='flex w-full justify-center self-center px-4 md:w-1/2 lg:w-2/5 lg:justify-end'>
            {/*  md:max-h-xs lg:max-h-sm */}
            <div className='box-image-blob relative mt-8 max-h-[18rem] max-w-[18rem] sm:mt-6 sm:max-h-[20rem] sm:max-w-[20rem] lg:max-h-full lg:w-full lg:max-w-md'>
              <NextImage
                alt='My Photo'
                src={MyPhoto}
                width={500}
                height={500}
                priority={true}
                quality={100}
                className='h-full w-full'
              />
              <div className='absolute left-3 top-4 -z-10 h-full w-full -translate-x-1'>
                <BlobImageSVG alt='1' />
              </div>

              <div className='absolute left-3 top-4 -z-10 h-full w-full -translate-x-1 blur-[20px]'>
                <BlobImageSVG alt='2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
