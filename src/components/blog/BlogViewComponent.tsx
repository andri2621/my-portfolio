'use client';
import { Blog } from 'contentlayer/generated';
import Fuse from 'fuse.js';
import React, { useEffect, useState } from 'react';

import { cn, getFromLocalStorage } from '@/lib/utils';
import { useMounted } from '@/hooks/useMounted';

import BlogCardHorizontal from '@/components/blog/BlogCardHorizontal';
import BlogCardVertical from '@/components/blog/BlogCardVertical';
import SelectTags from '@/components/blog/SelectTags';
import InputSearch from '@/components/form/InputSearch';

import { Icons } from '@/constant/IconsData';

type BlogViewComponentProps = {
  blogs: Blog[];
};

export default function BlogViewComponent({ blogs }: BlogViewComponentProps) {
  const [filteredData, setFilteredData] = useState(blogs);
  const [viewStyle, setViewStyle] = useState('grid');

  // create array of Tags
  const tagCounts = CalculateTagCounts(blogs);
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  //======================

  const [activeTag, setActiveTag] = useState('');
  const [searchText, setSearchText] = useState('');

  const mounted = useMounted();

  useEffect(() => {
    const filteredData = blogs.filter((blog) => {
      if (activeTag && !blog.tags.includes(activeTag)) {
        return false;
      }

      if (searchText) {
        const fuse = new Fuse([blog], {
          keys: ['title', 'description', 'tags'],
          threshold: 0.4,
        });
        const searchResults = fuse.search(searchText);
        return searchResults.length > 0;
      }

      return true;
    });

    setFilteredData(filteredData);
  }, [searchText, activeTag, blogs]);

  useEffect(() => {
    if (mounted) {
      const viewStore = getFromLocalStorage('blogCardViewStyle') ?? 'grid';
      setViewStyle(viewStore);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  const handleToggleViewStyle = (type: string) => {
    setViewStyle(type);
    localStorage.setItem('blogCardViewStyle', type);
  };

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value.trim();
    setSearchText(searchTerm);
  }

  function handleTag(tag: string) {
    setActiveTag(tag);
  }

  return (
    <div className='my-4'>
      <InputSearch
        type='search'
        placeholder='Search blog title, description, or tags...'
        className=''
        onChange={handleSearch}
      />
      <div className='my-4 flex items-center justify-between gap-4'>
        <SelectTags tags={sortedTags} handleTag={handleTag} />
        <div
          onClick={() =>
            handleToggleViewStyle(viewStyle === 'grid' ? 'list' : 'grid')
          }
          tabIndex={0}
          className={cn(
            'btn btn-outline',
            'flex gap-2',
            'h-10 min-h-0 w-[120px]',
            'normal-case',
            'rounded-md p-0',
            'border-gray-300 dark:border-gray-600',
            'hover:!bg-base-100 hover:!text-primary',
            'hover:border-primary dark:hover:border-primary'
          )}
        >
          {viewStyle === 'grid' ? (
            <>
              <Icons.grid className='text-2xl' />
              <span>Grid View</span>
            </>
          ) : (
            <>
              <Icons.list className='scale-110 text-2xl' />
              <span>List View</span>
            </>
          )}
        </div>
      </div>

      {blogs?.length ? (
        <div
          className={cn(
            { 'flex flex-col gap-4': viewStyle === 'list' },
            {
              'grid gap-4 sm:grid-cols-2 lg:grid-cols-3': viewStyle === 'grid',
            }
          )}
        >
          {filteredData.map((blog: Blog, index: number) => (
            <div key={blog._id}>
              {viewStyle === 'grid' && (
                <BlogCardVertical data={blog} index={index} />
              )}

              {viewStyle === 'list' && <BlogCardHorizontal data={blog} />}
            </div>
          ))}
        </div>
      ) : (
        <p>Sorry, No blog published :(</p>
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
