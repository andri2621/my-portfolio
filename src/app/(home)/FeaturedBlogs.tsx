'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { getAllBlogs } from '@/lib/utils';
import useAllContentMeta from '@/hooks/useAllContentMeta';

import BlogCard from '@/components/content/blog/BlogCard';
import Reveal from '@/components/Reveal';

export default function FeaturedBlogs() {
  const blogs = getAllBlogs();
  const { data: allContentMeta } = useAllContentMeta();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // const allBlogsWithViews = getAllBlogWithViews(data);

  // const sortedBlogs = blogs.sort((a, b) => b.views - a.views);
  // Take the top 6 blogs with the most views
  const featuredBlogs = blogs.slice(0, 4);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section
      id='featured-blog'
      className='hero place-items-start py-20 md:place-items-center'
    >
      <div className='flex flex-col items-center gap-6'>
        <div>
          <Reveal>
            <h4 className='text-primary text-center text-base font-semibold md:text-xl'>
              Blogs
            </h4>
          </Reveal>
          <Reveal>
            <h1 className='text-neutral text-center text-3xl dark:text-white'>
              Featured Posts
            </h1>
          </Reveal>
        </div>
        {/* <div ref={ref} className='grid gap-4 sm:grid-cols-2 lg:grid-cols-2'> */}
        <div ref={ref} className='grid gap-4 lg:grid-cols-2'>
          {featuredBlogs.map((blog, index) => {
            const meta = allContentMeta?.find(
              (meta) => meta.slug === blog.slugAsParams
            );
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                transition={{ duration: 0.3, delay: index * 0.4 }}
              >
                <BlogCard data={blog} meta={meta} />
              </motion.div>
            );
          })}
        </div>

        <Link href='/blogs' className='btn btn-primary btn-sm'>
          <div>See More Posts</div>
        </Link>
      </div>
    </section>
  );
}
