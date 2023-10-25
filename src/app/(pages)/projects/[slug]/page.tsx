import { allProjects } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import React from 'react';

import '@/styles/mdx.css';

import { MdxComponent } from '@/components/MdxComponent';

const ProjectsDetail = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find(
    (project) => project.slugAsParams === params.slug
  );

  if (!project) {
    return notFound();
  }

  return (
    <>
      <div className='flex flex-col'>
        <div>Projects Detail</div>
        <div className='mb-20'>Title : {params.slug}</div>

        <MdxComponent code={project.body.code} />
      </div>
    </>
  );
};

export default ProjectsDetail;
