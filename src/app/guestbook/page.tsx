import React from 'react';

import GiscusComment from '@/components/content/GiscusComment';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function GuestBookPage() {
  return (
    <div className='min-h-screen py-24'>
      <div>
        <h1 className='text-primary mb-4 font-bold'>Guest Book</h1>
        <p className='mt-2 text-gray-700 dark:text-gray-200'>
          Leave whatever you like to say—message, appreciation, suggestions. If
          you got some questions, you can leave them on the{' '}
          <UnderlineLink href='https://github.com/andri2621/my-portfolio/discussions/7'>
            QnA discussion
          </UnderlineLink>
        </p>
        <div className='divider'></div>
        <figure className='mt-12'>
          <GiscusComment />
        </figure>
      </div>
    </div>
  );
}
