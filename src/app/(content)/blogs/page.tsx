import * as React from 'react';

import '@/styles/mdx.css';

import { getAllBlogs } from '@/lib/utils';

import BlogViewComponent from '@/components/blog/BlogViewComponent';

export default async function AllBlogPage() {
  const blogs = getAllBlogs();

  return (
    <>
      <div>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='inline-block text-4xl tracking-tight lg:text-5xl'>
              Blog
            </h1>
            <p className=''>
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <div>
          <BlogViewComponent allBlogs={blogs} />
        </div>
      </div>
    </>
  );
}
