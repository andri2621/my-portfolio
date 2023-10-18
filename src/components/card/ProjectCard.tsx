'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Badge from '@/components/badge';

type CardProps = {
  title: string;
  desc: string;
  tags?: string[];
  link: string;
};
const ProjectCard = ({ title, desc, tags, link }: CardProps) => {
  return (
    <Link
      key={link}
      href={`/projects/${link ?? ''}`}
      className={clsx(
        'card card-compact group',
        'h-full',
        'shadow-3xl dark:shadow-4xl border-base-content/30 rounded-md border',
        'scale-100 hover:scale-[1.02] active:scale-90 motion-safe:transform-gpu motion-reduce:hover:scale-100',
        'transition duration-100'
      )}
    >
      <figure className='aspect-video pl-4 pr-4 pt-4'>
        <Image
          src='/images/bg-opengraph.jpg'
          alt='Shoes'
          width={100}
          height={100}
          loading='lazy'
          className='aspect-video h-full w-full rounded-md'
        />
      </figure>
      {/* CONTENT BODY */}
      <div className='card-body '>
        <h2 className='card-title !mb-0 line-clamp-1 capitalize'>{title}</h2>
        <div className='mb-auto'>
          <Badge tags={tags} />
        </div>
        <p className='mb-auto line-clamp-2  sm:line-clamp-3'>{desc}</p>
        <div className='card-actions justify-end'>
          <span
            className={clsx(
              'animated-underline  group-hover:animate-underline-hover',
              'group-hover:text-primary font-bold'
            )}
          >
            See more
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
