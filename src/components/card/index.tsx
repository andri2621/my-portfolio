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
};
const Card = ({ title, desc, tags }: CardProps) => {
  return (
    <div
      className={clsx(
        'card card-compact',
        'h-auto  sm:min-h-[425px]',
        'shadow-3xl dark:shadow-4xl border-base-content/30 border'
      )}
    >
      <figure className=''>
        <Image
          src='/images/bg-opengraph.jpg'
          alt='Shoes'
          width={100}
          height={100}
          loading='lazy'
          className='aspect-video h-full w-full'
        />
      </figure>
      <div className='card-body'>
        <h2 className='card-title line-clamp-1'>{title}</h2>

        <div className='mb-auto'>
          <Badge tags={tags} />
        </div>

        <p className='mb-auto line-clamp-2 flex-grow-0 sm:line-clamp-3'>
          {desc}
        </p>
        <div className='card-actions justify-end'>
          <UnderlineLink href='#' className='font-bold'>
            See More
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
