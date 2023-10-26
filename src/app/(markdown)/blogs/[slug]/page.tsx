import { allAuthors, allBlogs } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import '@/styles/mdx.css';

import { cn, formatDate } from '@/lib/utils';

import CloudinaryImage from '@/components/CloudinaryImage';
import UnstyledLink from '@/components/links/UnstyledLink';
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
  const blog = allBlogs
    .filter((blog) => blog.isPublished === true)
    .find((blog) => blog.slugAsParams === params.slug);

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
                  <UnstyledLink
                    key={author._id}
                    href={`https://twitter.com/${author.twitter}`}
                    className='text-md flex items-center space-x-2 no-underline'
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className='!m-0 rounded-full bg-white'
                    />
                    <div className='flex-1 text-left leading-tight'>
                      <div className='font-medium'>{author.title}</div>
                      <div className='text-muted-foreground text-base-content/60 text-sm'>
                        @{author.twitter}
                      </div>
                    </div>
                  </UnstyledLink>
                ) : null
              )}
            </div>
          ) : null}
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

          <MDXComponentsWrapper code={blog.body.code} />
        </article>
      </div>
    </>
  );
}
