import { allAuthors, allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { cn, formatDate } from '@/lib/utils';

import CustomImage from '@/components/CustomImage';
import { MDXComponentsWrapper } from '@/components/MDX/MDXComponentsWrapper';

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
  const blog = allBlogs.find((blog) => blog.slugAsParams === params.slug);

  if (!blog) return notFound();

  const authors = blog.authors.map((author) =>
    allAuthors.find(({ slug }) => {
      // Extract author fileName (id) from the slug
      return author.includes(slug.replace('/authors/', ''));
    })
  );

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
          <div>Published on {formatDate(blog.publishedAt)}</div>
          {authors?.length ? (
            <div className='mt-4 flex space-x-4'>
              {authors.map((author) =>
                author ? (
                  <Link
                    key={author._id}
                    href={`https://twitter.com/${author.twitter}`}
                    className='flex items-center space-x-2 text-sm'
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className='rounded-full bg-white'
                    />
                    <div className='flex-1 text-left leading-tight'>
                      <p className='font-medium'>{author.title}</p>
                      <p className='text-muted-foreground text-[12px]'>
                        @{author.twitter}
                      </p>
                    </div>
                  </Link>
                ) : null
              )}
            </div>
          ) : null}
          {blog.banner && (
            <CustomImage
              src={blog.banner.replace('/public', '')}
              alt={blog.title}
              className='bg-muted transition-colors'
            />
          )}

          <MDXComponentsWrapper code={blog.body.code} />
        </article>
      </div>
    </>
  );
}
