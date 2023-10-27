import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';
import * as React from 'react';

import '@/styles/mdx.css';

import BlogViewComponent from '@/components/buttons/BlogViewComponent';

export default async function AllBlogPage() {
  // const allBlogs = await getAllFile('blogs');
  const blogs = allBlogs
    .filter((blog) => blog.isPublished === true)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  if (!blogs) return notFound();

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
          <BlogViewComponent blogs={blogs} />
        </div>
      </div>
    </>
  );
}
