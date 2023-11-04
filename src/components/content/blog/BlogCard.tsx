'use client';

import { Blog } from 'contentlayer/generated';
import React from 'react';

import { cn, formatDate } from '@/lib/utils';

import Badge from '@/components/badge';
import CloudinaryImage from '@/components/image/CloudinaryImage';
import UnstyledLink from '@/components/links/UnstyledLink';

import { Icons } from '@/constant/IconsData';

import { ContentMeta } from '@/types/meta';

type BlogCardProps = {
  data: Blog;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: ContentMeta;
  className?: string;
};

export default function BlogCard({ data, meta, className }: BlogCardProps) {
  return (
    <UnstyledLink
      href={data.slug}
      className={cn(
        className,
        'relative',
        'card card-compact group',
        'sm:card-side',
        'h-full rounded-md',
        'shadow-3xl dark:shadow-base-content/20',
        // 'border-primary/30 hover:border',
        'scale-100 hover:scale-[1.02] active:scale-100 motion-safe:transform-gpu motion-reduce:hover:scale-100',
        'transition duration-100'
      )}
    >
      {/* <figure className='relative h-40 sm:h-full sm:w-1/3'>
        <Image
          src='/images/bg-opengraph.jpg'
          alt='Shoes'
          fill
          sizes='(max-width: 640px) 570px, (max-width: 1024px) 451px, 300px'
          className='h-full w-full object-cover transition-colors'
          priority={index <= 2}
        />
        <div className='absolute left-0 top-2 flex w-full px-4 sm:hidden'>
          <Badge tags={data.tags} className='w-full' maxBadges={10} />
        </div>
      </figure> */}
      <CloudinaryImage
        publicId={data.banner.replace('/public', '')}
        alt={data.title}
        className='relative h-40 transition-colors sm:h-full sm:w-1/3'
        width={731}
        height={411}
      />

      <div className='card-body sm:w-2/3'>
        <div className='flex items-center gap-4'>
          <div className='font-semibold'>{formatDate(data.publishedAt)}</div>
        </div>
        <h2 className='card-title text-neutral !mb-0 line-clamp-2 text-lg capitalize leading-snug dark:text-white'>
          {data.title}
        </h2>
        <div className={cn('flex gap-2', 'text-primary text-sm font-semibold')}>
          <div className={cn('flex items-center gap-1')}>
            <Icons.time className='fill-base-content' />
            {data.readingTime}
          </div>
          <div className={cn('flex items-center gap-1')}>
            <Icons.views className='fill-base-content' />
            {meta?.views ?? '---'} views
          </div>
        </div>
        <Badge tags={data.tags} className='hidden sm:flex' />
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
