import { allBlogs } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import '@/styles/mdx.css';

import { formatDate } from '@/lib/utils';

export default async function AllBlogPage() {
  // const allBlogs = await getAllFile('blogs');
  const blogs = allBlogs
    .filter((blog) => blog.publishedAt)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  if (!blogs) return notFound();

  return (
    <>
      <div className='container max-w-4xl py-6 lg:py-10'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='font-heading inline-block text-4xl tracking-tight lg:text-5xl'>
              Blog
            </h1>
            <p className='text-muted-foreground text-xl'>
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr className='my-8' />
        {blogs?.length ? (
          <div className='grid gap-10 sm:grid-cols-2'>
            {blogs.map((blog, index) => {
              return (
                <article
                  key={blog._id}
                  className='group relative flex flex-col space-y-2'
                >
                  {blog.banner && (
                    <Image
                      src={blog.banner.replace('/public', '')}
                      alt={blog.title}
                      width={804}
                      height={452}
                      className='bg-muted rounded-md border transition-colors'
                      priority={index <= 1}
                    />
                  )}
                  <h2 className='text-2xl font-extrabold'>{blog.title}</h2>
                  {blog.description && (
                    <p className='text-muted-foreground'>{blog.description}</p>
                  )}
                  {blog.publishedAt && (
                    <p className='text-muted-foreground text-sm'>
                      {formatDate(blog.publishedAt)}
                    </p>
                  )}
                  <div>{blog.readingTime}</div>
                  <Link href={blog.slug} className='absolute inset-0'>
                    <span className='sr-only'>View Article</span>
                  </Link>
                </article>
              );
            })}
          </div>
        ) : (
          <p>No blog published.</p>
        )}
      </div>
    </>
  );
}
