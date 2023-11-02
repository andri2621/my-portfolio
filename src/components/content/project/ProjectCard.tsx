'use client';

import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import React from 'react';

import { cn } from '@/lib/utils';

import Badge from '@/components/badge';
import UnstyledLink from '@/components/links/UnstyledLink';

type ProjectCardProps = {
  data: Project;
  index: number;
  className?: string;
};

export default function ProjectCard({
  data,
  index,
  className,
}: ProjectCardProps) {
  return (
    <UnstyledLink
      href={data.slug}
      className={cn(
        className,
        'relative',
        'card card-compact group',
        'h-full rounded-md',
        'shadow-3xl dark:shadow-base-content/20',
        // 'border-primary/30 hover:border',
        'translate-y-0 hover:-translate-y-2 active:translate-y-1 motion-safe:transform-gpu motion-reduce:hover:translate-y-0',
        'transition duration-100'
      )}
    >
      <div className='card-body'>
        <h2 className='card-title !mb-0 line-clamp-2 text-lg capitalize leading-snug text-black dark:text-white'>
          {data.title}
        </h2>

        <p className='mb-auto line-clamp-2 flex-grow-0'>{data.description}</p>

        <Badge tags={data.tags} maxBadges={2} />

        <figure className='relative aspect-video w-full'>
          <Image
            src='/images/bg-opengraph.jpg'
            alt='Shoes'
            fill
            sizes='(max-width: 640px) 570px, (max-width: 1024px) 451px, 300px'
            className='h-full w-full rounded-md object-cover transition-colors'
            priority={index <= 2}
          />
        </figure>

        <div className='card-actions justify-start'>
          <div
            className={cn(
              'animated-underline group-hover:text-primary group-hover:animate-underline-hover',
              'font-bold'
            )}
          >
            See more
          </div>
        </div>
      </div>
    </UnstyledLink>
  );
}
