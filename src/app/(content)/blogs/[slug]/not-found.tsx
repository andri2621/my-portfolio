import { Metadata } from 'next';

import ArrowLink from '@/components/links/ArrowLink';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFoundBlog() {
  return (
    <section>
      <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
        <div className='mt-8 text-4xl font-bold'>Cannot found blog</div>
        <ArrowLink direction='left' href='/blog' className='mt-4'>
          Back to blog page
        </ArrowLink>
      </div>
    </section>
  );
}
