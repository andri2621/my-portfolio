import React from 'react';

import { cn } from '@/lib/utils';

import UnderlineLink from '@/components/links/UnderlineLink';

export default function AboutMe() {
  return (
    <div className={cn('flex flex-col', 'leading-normal')}>
      <div className='mb-4'>
        Hello! I'm <span className='text-primary font-bold'>Andi Setiawan</span>
        , a frontend developer with a passion for web development.
        <br />
        My journey began in high school when I first delved into HTML. This
        early exposure ignited my curiosity, driving me to learn more about web
        development. It continued as i explored PHP during my college years. I
        watch a lot of youtube videos to explore more about web developent,
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
        showcase my projects. Writing about what I've learned not only helps me
        remember but also allows me to pass on my knowledge to you.
      </div>
    </div>
  );
}
