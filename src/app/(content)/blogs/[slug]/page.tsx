import { allBlogs } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import * as React from 'react';

import { cn, formatDate } from '@/lib/utils';

import SingleViewCounter from '@/components/content/blog/SIngleViewCounter';
import GiscusComment from '@/components/content/GiscusComment';
import CloudinaryImage from '@/components/image/CloudinaryImage';
import { MDXComponentsWrapper } from '@/components/MDX/MDXComponentsWrapper';

import { Icons } from '@/constant/IconsData';

type BlogPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slugAsParams,
  }));
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const blog = allBlogs
    .filter((blog) => blog.isPublished === true)
    .find((blog) => blog.slugAsParams === params.slug);

  if (!blog) return notFound();

  return (
    <>
      <div className='min-h-screen'>
        <article
          className={cn(
            'prose prose-sm md:prose-base lg:prose-lg !prose-custom prose-img:rounded-lg ',
            'mx-auto'
          )}
        >
          <h1>{blog.title}</h1>
          <div className='text-sm'>
            <div>
              Published on {formatDate(blog.publishedAt)} By {blog.author}
            </div>
            {blog.lastUpdated && (
              <div>Last updated {formatDate(blog.lastUpdated)}</div>
            )}
          </div>

          <div
            className={cn(
              'mt-2 flex gap-2',
              'text-primary text-sm font-semibold'
            )}
          >
            <div className={cn('flex items-center gap-1')}>
              <Icons.time className='fill-base-content' />
              {blog.readingTime}
            </div>
            <div className={cn('flex items-center gap-1')}>
              <Icons.views className='fill-base-content' />
              <SingleViewCounter slug={blog.slugAsParams} />
            </div>
          </div>

          {blog.banner && (
            <CloudinaryImage
              publicId={blog.banner.replace('/public', '')}
              alt={blog.title}
              className='transition-colors'
              width={731}
              height={411}
              mdx
            />
          )}

          {/* <hr className='!border-base-content/20 !mb-8 !mt-4' /> */}

          <MDXComponentsWrapper code={blog.body.code} />
        </article>

        <div className='divider'></div>

        <figure className='mt-12'>
          <GiscusComment />
        </figure>
      </div>
    </>
  );
}
