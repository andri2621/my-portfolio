'use client';

import { Blog } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';

import { cn, formatDate } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Icons } from '@/constant/IconsData';

type CardProps = {
  data: Blog;
  index: number;
};

export default function BlogCardVertical({ data, index }: CardProps) {
  return (
    <UnstyledLink
      href={data.slug}
      className={cn(
        'card card-compact group',
        'h-full rounded-md',
        'shadow-3xl dark:shadow-base-content/20',
        'border-primary/30 hover:border',
        'scale-100 hover:scale-[1.02] active:scale-100 motion-safe:transform-gpu motion-reduce:hover:scale-100',
        'transition duration-100'
      )}
    >
      <figure className='relative h-40 w-full'>
        <Image
          src='/images/bg-opengraph.jpg'
          alt='Shoes'
          fill
          sizes='(max-width: 640px) 570px, (max-width: 1024px) 451px, 300px'
          className='h-full w-full object-cover transition-colors'
          priority={index <= 2}
        />
      </figure>

      <div className='card-body'>
        <h2 className='card-title !mb-0 line-clamp-2 capitalize text-black dark:text-white'>
          {data.title}
        </h2>
        <div className='mb-auto'>
          <div className='text-primary flex items-center gap-1'>
            <Icons.time />
            {data.readingTime}
          </div>
        </div>
        <div className='mb-auto font-semibold text-black dark:text-white'>
          {formatDate(data.publishedAt)}
        </div>
        <p className='mb-auto line-clamp-2 sm:line-clamp-2'>
          {data.description}
        </p>
        <div className='card-actions justify-end'>
          <div
            className={cn(
              'animated-underline group-hover:text-primary group-hover:animate-underline-hover',
              'font-bold'
            )}
          >
            Read more
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
}
