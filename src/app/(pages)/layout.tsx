'use client';

import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='pt-24'>
      <ArrowLink direction='left' className='mt-2' href='/'>
        Back to Home
      </ArrowLink>
      {children}
    </div>
  );
};

export default LayoutPage;
