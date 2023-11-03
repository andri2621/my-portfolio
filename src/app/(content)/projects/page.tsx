import React from 'react';

import '@/styles/mdx.css';

import { cn, getAllProjects } from '@/lib/utils';

import ProjectCard from '@/components/content/project/ProjectCard';

export default async function AllProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <div>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='text-primary inline-block text-4xl tracking-tight  lg:text-5xl'>
              Projects
            </h1>
            <p className=''>A showcase of my several projects.</p>
          </div>
        </div>
        <div className='my-6'>
          {projects.length ? (
            <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3')}>
              {projects.map((project) => (
                <ProjectCard key={project._id} data={project} />
              ))}
            </div>
          ) : (
            <div>Sorry, No project published.</div>
          )}
        </div>
      </div>
    </>
  );
}
