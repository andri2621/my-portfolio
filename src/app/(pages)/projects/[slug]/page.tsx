import React from 'react';

const ProjectsDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className='flex flex-col'>
        <div>Projects Detail</div>
        <div>Title : {params.slug}</div>
      </div>
    </>
  );
};

export default ProjectsDetail;
