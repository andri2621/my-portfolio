'use client';
import { Blog } from 'contentlayer/generated';
import Fuse from 'fuse.js';
import { useEffect, useState } from 'react';

import { cn, getFromLocalStorage } from '@/lib/utils';
import { useMounted } from '@/hooks/useMounted';

import BlogCardHorizontal from '@/components/buttons/BlogCardHorizontal';
import BlogCardVertical from '@/components/card/BlogCardVertical';
import InputSearch from '@/components/form/InputSearch';

import { Icons } from '@/constant/IconsData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BlogViewComponent({ blogs }: any) {
  const [filteredData, setFilteredData] = useState(blogs);
  const [viewStyle, setViewStyle] = useState('');
  const mounted = useMounted();

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
    event.preventDefault();
    event.stopPropagation();
    const searchTerm = event.target.value.trim(); // Trim to remove leading/trailing whitespace

    if (searchTerm.length >= 1) {
      const fuse = new Fuse(blogs, {
        keys: ['title', 'description', 'tags'],
        threshold: 0.4,
      });

      const arrayItems = fuse.search(searchTerm);
      const searchResults = arrayItems.map((result) => result.item);

      setFilteredData(searchResults);
    } else {
      setFilteredData(blogs);
    }
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
        <div>
          {filteredData.length
            ? `Total: ${filteredData.length} Blog`
            : 'No Blog Exist'}
        </div>
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
            { 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3': viewStyle === 'grid' }
          )}
        >
          {filteredData.map((blog: Blog, index: number) => {
            if (viewStyle === 'grid') {
              return (
                <div key={blog._id}>
                  <BlogCardVertical data={blog} index={index} />
                </div>
              );
            } else {
              return (
                <div key={blog._id}>
                  <BlogCardHorizontal data={blog} />
                </div>
              );
            }
          })}
        </div>
      ) : (
        <p>Sorry, No blog published :(</p>
      )}
    </div>
  );
}
