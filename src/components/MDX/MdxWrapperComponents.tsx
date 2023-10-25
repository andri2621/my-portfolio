/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import * as React from 'react';

import { cn } from '@/lib/utils';

import CustomImage from '@/components/CustomImage';
import CustomLink from '@/components/links/CustomLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import { Callout } from '@/components/MDX/Callout';
import { MdxCard } from '@/components/MDX/MdxCard';

const components = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        'border-base-content/20 mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold tracking-tight first:mt-0',
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: any) => (
    <h4
      className={cn(
        'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: any) => (
    <h5
      className={cn(
        'mt-8 scroll-m-20 text-lg font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: any) => (
    <h6
      className={cn(
        'mt-8 scroll-m-20 text-base font-semibold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: any) => {
    return (
      <UnderlineLink
        className={cn('font-medium no-underline', className)}
        {...props}
      />
    );
  },
  p: ({ className, ...props }: any) => (
    <p
      className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: any) => (
    <ul className={cn('my-6 ml-2 list-disc', className)} {...props} />
  ),
  ol: ({ className, ...props }: any) => (
    <ol className={cn('my-6 ml-2 list-decimal', className)} {...props} />
  ),
  li: ({ className, ...props }: any) => (
    <li className={cn('mt-2', className)} {...props} />
  ),
  hr: ({ ...props }) => <hr className='my-4 md:my-8' {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className='my-6 w-full overflow-y-auto'>
      <table className={cn('w-full', className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn('even:bg-muted m-0 border-t p-0', className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: any) => (
    <th
      className={cn(
        'dark:border-base-content/20 border-base-content/20 border !px-4 !py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: any) => (
    <td
      className={cn(
        'dark:border-base-content/20 border-base-content/20 border !px-4 !py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    ...props
  }: {
    className?: string;
    [key: string]: any;
  }) => (
    <pre
      className={cn(
        'overflow-x-auto rounded-lg !py-4',
        // '!bg-black',
        // '!mb-4 !mt-6',
        className
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: any) => {
    const isHasLang = props['data-language'];
    //BACKTICK CODE
    if (!isHasLang) {
      return (
        <code
          className={cn(
            className,
            'bg-primary/30 relative rounded  px-[0.3rem] py-[0.2rem] font-mono text-sm'
          )}
          {...props}
        />
      );
    }
    // CODE BLOCK SNIPPET
    return <code className={cn(className)} {...props} />;
  },
  // img: ({
  //   className,
  //   alt,
  //   ...props
  // }: React.ImgHTMLAttributes<HTMLImageElement>) => (
  //   // eslint-disable-next-line @next/next/no-img-element
  //   <img className={cn('rounded-lg border', className)} alt={alt} {...props} />
  // ),
  Image, // next image
  Callout,
  Card: MdxCard,
  CustomImage,
  CustomLink,
  UnderlineLink,
};

interface MdxProps {
  code: string;
}

export function MdxWrapperComponents({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className='mdx'>
      <Component components={components} />
    </div>
  );
}
