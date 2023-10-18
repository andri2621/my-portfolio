'use client';

import Link from 'next/link';

import { ProjectCard } from '@/components/card';

import { ProjectsData } from '@/constant/ProjectsData';

const PortfolioSection = () => {
  return (
    <section
      id='portfolio'
      className='hero  place-items-start py-20 md:place-items-center'
    >
      <div className='flex flex-col items-center gap-6'>
        <div>
          <h4 className='text-primary text-center text-base font-semibold md:text-xl'>
            Portfolio
          </h4>
          <h1 className='text-neutral text-center text-3xl dark:text-white'>
            My Latest Works
          </h1>
        </div>
        <div className=' grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {ProjectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                tags={project.tags}
                desc={project.desc}
                link={project.link}
              />
            );
          })}
        </div>
        <Link href='/projects' className='btn btn-primary btn-sm'>
          <div>See More Project</div>
        </Link>
      </div>
    </section>
  );
};

export default PortfolioSection;
