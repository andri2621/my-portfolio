import React from 'react';

import { cn, formatDate } from '@/lib/utils';

import Badge from '@/components/badge';
import UnstyledLink from '@/components/links/UnstyledLink';

import { Icons } from '@/constant/IconsData';

type CardProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta?: any;
  className?: string;
};

export default function BlogList({ data, meta, className }: CardProps) {
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
      <div className='card-body'>
        <h2 className='card-title !mb-0 line-clamp-2 capitalize text-black dark:text-white'>
          {data.title}
        </h2>
        <div className='mb-auto flex gap-2'>
          <div className=' '>{formatDate(data.publishedAt)}</div>
          <div className='text-primary flex items-center gap-1 font-semibold '>
            <Icons.time />
            {data.readingTime}
          </div>
        </div>

        <div
          className={cn(
            'mb-auto',
            'w-max',
            'rounded-sm px-1',
            'bg-primary text-neutral text-xs font-semibold'
          )}
        >
          {meta?.views ?? '---'} Views
        </div>
        <div className='mb-auto'>
          <Badge tags={data.tags} />
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
