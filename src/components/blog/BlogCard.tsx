'use client';

import Image from 'next/image';
import React from 'react';

import { cn, formatDate } from '@/lib/utils';

import Badge from '@/components/badge';
import UnstyledLink from '@/components/links/UnstyledLink';

import { Icons } from '@/constant/IconsData';

import { ContentMeta } from '@/types/meta';

type CardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: ContentMeta;
  index: number;
  className?: string;
};

export default function BlogCard({ data, meta, index, className }: CardProps) {
  return (
    <UnstyledLink
      href={data.slug}
      className={cn(
        className,
        'relative',
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

      <div
        className={cn(
          'absolute right-4 top-4',
          'flex items-center gap-1',
          'rounded-sm px-1',
          'bg-primary text-neutral text-xs font-semibold'
        )}
      >
        {meta?.views ?? '---'} Views
      </div>

      <div className='card-body'>
        <h2 className='card-title !mb-0 line-clamp-2 capitalize text-black dark:text-white'>
          {data.title}
        </h2>

        <div className=' flex items-center gap-4'>
          <div className='font-semibold'>{formatDate(data.publishedAt)}</div>

          <div
            className={cn(
              'text-primary font-semibold',
              'flex items-center gap-1'
            )}
          >
            <Icons.time />
            {data.readingTime}
          </div>
        </div>
        <div className='mb-auto'>
          <Badge tags={data.tags} />
        </div>

        <p className='mb-auto line-clamp-2 flex-grow-0'>{data.description}</p>
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
