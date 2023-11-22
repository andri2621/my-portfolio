'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { cn, getAllProjects } from '@/lib/utils';

import ProjectCard from '@/components/content/project/ProjectCard';
import Reveal from '@/components/Reveal';

export default function FeaturedProject() {
  const projects = getAllProjects();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const lastProjects = projects.slice(0, 3);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      {lastProjects.length ? (
        <section
          id='featured-project'
          className='hero place-items-start py-20 md:place-items-center'
        >
          <div className='flex w-full flex-col items-center gap-6'>
            <div>
              <Reveal>
                <h4 className='text-primary text-center text-base font-semibold md:text-xl'>
                  Portfolio
                </h4>
              </Reveal>
              <Reveal>
                <h1 className='text-neutral text-center text-3xl dark:text-white'>
                  My Latest Works
                </h1>
              </Reveal>
            </div>
            <div className='w-full'>
              <div
                ref={ref}
                className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-3')}
              >
                {lastProjects.map((project, index) => (
                  <motion.div
                    key={project._id}
                    variants={cardVariants}
                    initial='initial'
                    animate={isInView ? 'animate' : 'initial'}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                  >
                    <ProjectCard key={project._id} data={project} />
                  </motion.div>
                ))}
              </div>
            </div>

            <Link href='/projects' className='btn btn-primary btn-sm'>
              <div>See All Projects</div>
            </Link>
          </div>
        </section>
      ) : null}
    </>
  );
}
