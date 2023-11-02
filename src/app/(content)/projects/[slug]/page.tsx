import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';

import { cn } from '@/lib/utils';

import CloudinaryImage from '@/components/image/CloudinaryImage';
import UnderlineLink from '@/components/links/UnderlineLink';
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
          {project.banner && (
            <CloudinaryImage
              publicId={project.banner.replace('/public', '')}
              alt={project.title}
              className='transition-colors'
              width={731}
              height={411}
              mdx
            />
          )}
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          <div className='flex gap-4'>
            {project.sourceCode && (
              <UnderlineLink
                href={project.sourceCode}
                className='text-md no-underline'
              >
                Source Code
              </UnderlineLink>
            )}
            {project.demoUrl && (
              <UnderlineLink
                href={project.demoUrl}
                className='text-md no-underline'
              >
                Live Demo
              </UnderlineLink>
            )}
          </div>

          <MDXComponentsWrapper code={project.body.code} />
        </article>
      </div>
    </>
  );
}
