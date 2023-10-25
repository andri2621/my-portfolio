'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import Badge from '@/components/badge';
import UnderlineLink from '@/components/links/UnderlineLink';

type CardProps = {
  title: string;
  desc: string;
  tags?: string[];
  link: string;
};

function ProjectCard({ title, desc, tags, link }: CardProps) {
  return (
    <div
      key={link}
      className={clsx(
        'card card-compact group',
        'h-full',
        'shadow-3xl border-base-content/30 rounded-md border',
        'scale-100 hover:scale-[1.02] motion-safe:transform-gpu motion-reduce:hover:scale-100',
        'transition duration-100'
      )}
    >
      <figure className='relative h-40 w-full'>
        <Image
          src='/images/bg-opengraph.jpg'
          alt='Shoes'
          fill
          loading='lazy'
          decoding='async'
          sizes='(max-width: 640px) 570px, (max-width: 1024px) 451px, 300px'
          className='h-full w-full rounded-md object-cover'
        />
      </figure>
      {/* CONTENT BODY */}
      <div className='card-body'>
        <h2 className='card-title !mb-0 line-clamp-1 capitalize'>{title}</h2>
        <div className='mb-auto'>
          <Badge tags={tags} />
        </div>
        <p className='mb-auto line-clamp-2 sm:line-clamp-2 '>{desc}</p>
        <div className='card-actions justify-end'>
          <UnderlineLink
            href={`/projects/${link ?? ''}`}
            className={clsx(
              // 'animated-underline ',
              'font-bold'
            )}
          >
            See more
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
