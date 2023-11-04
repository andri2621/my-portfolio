'use client';
import { Blog } from 'contentlayer/generated';
import Fuse from 'fuse.js';
import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import useAllContentMeta from '@/hooks/useAllContentMeta';

import BlogCard from '@/components/content/blog/BlogCard';
import Pagination from '@/components/content/blog/Pagination';
import SelectTags from '@/components/content/blog/SelectTags';
import InputSearch from '@/components/form/InputSearch';

import { POSTS_PER_PAGE } from '@/constant/config';

type BlogViewProps = {
  allBlogs: Blog[];
  pageNumber?: number;
};

export default function BlogViewComponent({
  allBlogs,
  pageNumber = 1,
}: BlogViewProps) {
  // get content views
  const { data: allContentMeta } = useAllContentMeta();
  //======================
  // create array of Tags
  const tagCounts = CalculateTagCounts(allBlogs);
  const sortedTags = Object.keys(tagCounts).sort(
    (a, b) => tagCounts[b] - tagCounts[a]
  );
  //======================
  const [filteredData, setFilteredData] = useState<Blog[]>(allBlogs);
  const [activeTag, setActiveTag] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');
  //======================
  // PAGINATION
  const initialDisplayPosts = filteredData.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(filteredData.length / POSTS_PER_PAGE),
  };
  //======================

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.trim();
    setSearchText(searchTerm);
  }

  const handleTag = (tag: string) => {
    setActiveTag(tag);
  };

  useEffect(() => {
    let filteredBlogs = allBlogs;

    if (activeTag !== '') {
      filteredBlogs = allBlogs.filter((blog) => blog.tags.includes(activeTag));
    }

    if (searchText !== '') {
      const fuse = new Fuse(filteredBlogs, {
        keys: ['title', 'description', 'tags'],
        threshold: 0.2,
      });

      filteredBlogs = fuse.search(searchText).map((result) => result.item);
    }

    setFilteredData(filteredBlogs);
  }, [searchText, activeTag, allBlogs]);

  return (
    <div className='my-4'>
      <InputSearch
        type='search'
        placeholder='Search by title, description, or tags...'
        className=''
        onChange={handleSearch}
      />
      <div className='my-4 flex items-center justify-between gap-4'>
        <SelectTags tags={sortedTags} handleTag={handleTag} />
      </div>

      {initialDisplayPosts.length ? (
        <div className={cn('grid gap-4 lg:grid-cols-2')}>
          {initialDisplayPosts.map((blog: Blog) => {
            const meta = allContentMeta?.find(
              (meta) => meta.slug === blog.slugAsParams
            );
            return (
              <div key={blog._id}>
                <BlogCard data={blog} meta={meta} />
              </div>
            );
          })}
        </div>
      ) : (
        <p>Sorry, No blog published.</p>
      )}

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </div>
  );
}

// Count file with tags
function CalculateTagCounts(blogs: Blog[]): Record<string, number> {
  const tagCounts: Record<string, number> = {};

  blogs.forEach((blog) => {
    const tags = blog.tags;

    if (tags && Array.isArray(tags)) {
      tags.forEach((tag) => {
        if (tagCounts[tag]) {
          tagCounts[tag]++;
        } else {
          tagCounts[tag] = 1;
        }
      });
    }
  });

  return tagCounts;
}
