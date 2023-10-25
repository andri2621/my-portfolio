import React from 'react';

import ArrowLink from '@/components/links/ArrowLink';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ArrowLink direction='left' className='mb-10 mt-2' href='/blogs'>
        Back to Blogs
      </ArrowLink>
      {children}
    </>
  );
};

export default layout;
