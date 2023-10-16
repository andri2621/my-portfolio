'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import IconFlagEn from '~/icons/en.png';
import IconFlagId from '~/icons/id.png';

// import { i18n } from "@/i18n.config";

interface IconFlagProps {
  className?: string;
}

const ImageEngland: React.FC<IconFlagProps> = ({ className = 'h-6 w-6' }) => (
  <Image
    src={IconFlagEn}
    alt='England Flag'
    width={40}
    height={40}
    className={className}
  />
);

const ImageIndonesia: React.FC<IconFlagProps> = ({ className = 'h-6 w-6' }) => (
  <Image
    src={IconFlagId}
    alt='Indonesia Flag'
    width={40}
    height={40}
    className={className}
  />
);

const LocaleChanger = () => {
  const pathName = usePathname();

  if (!pathName) {
    return (
      <div className='h-6 w-6 animate-pulse rounded-full bg-slate-500'></div>
    );
  }

  return (
    <>
      <Link href='#' className='px-2 py-2 outline-none'>
        <ImageEngland className='h-4 w-4' />
        <span>English</span>
      </Link>
      <Link href='#' className='px-2 py-2 outline-none'>
        <ImageIndonesia className='h-4 w-4' />
        <span>Indonesia</span>
      </Link>
    </>
  );
};

export default LocaleChanger;
