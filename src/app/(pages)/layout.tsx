'use client';

import React from 'react';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  return <section className='min-h-screen pt-24'>{children}</section>;
};

export default LayoutPage;
