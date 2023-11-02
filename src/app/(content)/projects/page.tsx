import { allProjects } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';

import { formatDate } from '@/lib/utils';

export default async function AllProjectsPage() {
  const projects = allProjects
    .filter((project) => project.isPublished)
    .sort((a, b) => {
      return compareDesc(new Date(a.publishedAt), new Date(b.publishedAt));
    });

  if (!projects) return notFound();

  return (
    <div className='flex flex-col'>
      {projects?.length ? (
        <div className='flex w-full flex-col gap-4'>
          {projects.map((project) => {
            return (
              <Link
                href={project.slug}
                key={project._id}
                className='bg-base-200 text-base-content border-primary/50 rounded-md border px-6 py-4'
              >
                <article className='group relative flex flex-col space-y-2'>
                  <h2 className='text-2xl font-extrabold'>{project.title}</h2>
                  {project.description && (
                    <p className='text-muted-foreground'>
                      {project.description}
                    </p>
                  )}
                  <div className='flex gap-4'>
                    {project.publishedAt && (
                      <div className='text-muted-foreground text-sm'>
                        {formatDate(project.publishedAt)}
                      </div>
                    )}
                    <div className='text-sm'>{project.readingTime}</div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      ) : (
        <p>No Project Published.</p>
      )}
    </div>
  );
}
