import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { notFound } from 'next/navigation';
import * as React from 'react';

import '@/styles/mdx.css';

import BlogCard from '@/components/card/BlogCard';
import StyledInput from '@/components/form/StyledInput';

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
            <StyledInput placeholder='Search blog...' />
          </div>
        </div>
        <div className='divider my-8'></div>
        {blogs?.length ? (
          <div className=' grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
            {blogs.map((blog, index) => {
              return (
                <div key={blog._id}>
                  <BlogCard data={blog} index={index} />
                </div>
              );
            })}
          </div>
        ) : (
          <p>Sorry, No blog published :(</p>
        )}
      </div>
    </>
  );
}
