import { allBlogs } from 'contentlayer/generated';
import * as React from 'react';

import '@/styles/mdx.css';

import { getAllBlogs } from '@/lib/utils';

import BlogViewComponent from '@/components/blog/BlogViewComponent';

import { POSTS_PER_PAGE } from '@/constant/config';

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(allBlogs.length / POSTS_PER_PAGE);
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));

  return paths;
};

export default async function BlogPage({
  params,
}: {
  params: { page: string };
}) {
  const pageNumber = parseInt(params.page as string);

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
          <BlogViewComponent pageNumber={pageNumber} allBlogs={blogs} />
        </div>
      </div>
    </>
  );
}
