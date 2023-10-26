import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';

import { cn, formatDate } from '@/lib/utils';

import CustomImage from '@/components/CustomImage';
import { MDXComponentsWrapper } from '@/components/MDX/MDXComponentsWrapper';

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project.slugAsParams,
  }));
}

export default async function SingleProjectPage({ params }: ProjectPageProps) {
  const project = allProjects
    .filter((project) => project.isPublished === true)
    .find((project) => project.slugAsParams === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div className='min-h-screen'>
        <article
          className={cn(
            'prose prose-sm md:prose-base lg:prose-lg !prose-custom prose-img:rounded-lg ',
            'mx-auto'
          )}
        >
          <h1>{project.title}</h1>
          <div>Published on {formatDate(project.publishedAt)}</div>

          {project.banner && (
            <CustomImage
              src={project.banner.replace('/public', '')}
              alt={project.title}
              className='bg-muted transition-colors'
            />
          )}

          <MDXComponentsWrapper code={project.body.code} />
        </article>
      </div>
    </>
  );
}
