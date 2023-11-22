import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidFilePdf } from 'react-icons/bi';

import { cn } from '@/lib/utils';

import LiquidBlob from '@/components/icons/LiquidBlob';
import UnderlineLink from '@/components/links/UnderlineLink';

import MyPhoto from '~/images/MyPhoto.png';

export default function AboutMe() {
  return (
    <div id='about-me'>
      <div
        className={cn(
          'float-none flex flex-col items-center ',
          'xs:float-right xs:mb-4'
        )}
      >
        <div className='box-image-blob relative h-60 w-60 sm:h-72 sm:w-72'>
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
        <Link href='#' className='btn btn-primary btn-xs sm:btn-sm my-4'>
          <BiSolidFilePdf size={18} />
          <span>RESUME</span>
        </Link>
      </div>

      <div>
        <h1 className='text-primary mb-4 font-bold'>About Me</h1>
        <div className='mb-4'>
          Hello! I'm{' '}
          <span className='text-primary font-bold'>Andi Setiawan</span>, a
          frontend developer with a passion for web development. My journey
          began in high school when I first delved into HTML. This early
          exposure ignited my curiosity, driving me to learn more about web
          development. It continued as i explored PHP during my college years. I
          watch a lot of youtube videos to explore more about web development,
          especially frontend development.
        </div>
        <div className='mb-4'>
          Following college, I completed a two-month fullstack Node.js bootcamp,
          mastering web development and the React ecosystem. I'm now a full-time
          remote worker as frontend developer at{' '}
          <UnderlineLink href='https://code.id' className='text-primary'>
            CodeID
          </UnderlineLink>
          , where I continue to expand my expertise through ongoing learning and
          projects. I thrive on learning new technologies and techniques. I dont
          just focus on web development, but also actively learning about mobile
          development using React Native. Always seeking feedback to enhance my
          skills and refine my craft.
        </div>
        <div className='mb-4'>
          I'll be using this website to share my thoughts through blogs and
          showcase my projects. Writing about what I've learned not only helps
          me remember but also allows me to pass on my knowledge to you.
        </div>
      </div>
    </div>
  );
}
