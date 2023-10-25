'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { ProjectCard } from '@/components/card';
import Reveal from '@/components/Reveal';

import { ProjectsData } from '@/constant/ProjectsData';

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id='portfolio'
      className='hero place-items-start py-20 md:place-items-center'
    >
      <article className='flex flex-col items-center gap-6'>
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
        <div ref={ref} className=' grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {ProjectsData.map((project, index) => {
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  tags={project.tags}
                  desc={project.desc}
                  link={project.link}
                />
              </motion.div>
            );
          })}
        </div>

        <Link href='/projects' className='btn btn-primary btn-sm'>
          <div>See More Project</div>
        </Link>
      </article>
    </section>
  );
};

export default PortfolioSection;
