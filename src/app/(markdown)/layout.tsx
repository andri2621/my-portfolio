'use client';

import { usePathname } from 'next/navigation';

import ArrowLink from '@/components/links/ArrowLink';

const LayoutPage = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const arrRoute = pathName.split('/');
  const baseLabel = arrRoute.length > 2 ? arrRoute[1] : 'Home';

  return (
    <section className='min-h-screen py-24'>
      <ArrowLink
        direction='left'
        className='mb-10 mt-2'
        href={arrRoute.length > 2 ? '/' + arrRoute[1] : '/'}
      >
        Back to <span className='capitalize'>{baseLabel}</span>
      </ArrowLink>
      {children}
    </section>
  );
};

export default LayoutPage;
