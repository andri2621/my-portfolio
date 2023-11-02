'use client';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useClickOutside } from '@/hooks/useClickOutside';

import { Icons } from '@/constant/IconsData';

type SelectTagsProps = {
  tags: string[];
  handleTag: (tag: string) => void;
};

export default function SelectTags({ tags, handleTag }: SelectTagsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('');

  const boxRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(boxRef, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelectTag = (tag: string) => {
    setActiveTag(tag);
    setIsOpen(false);
    handleTag(tag);
  };

  return (
    <div
      className='dropdown dropdown-bottom dropdown-end relative '
      ref={boxRef}
    >
      {/* TRIGGER BUTTON */}
      <label htmlFor='select-input-tags' className='swap'>
        <input
          id='select-input-tags'
          type='checkbox'
          className='hidden'
          checked={isOpen}
          tabIndex={0}
          onChange={toggleDropdown}
        />

        <div
          className={cn(
            'swap-off fill-primary',
            'flex items-center justify-between',
            'h-10 w-32 rounded-md px-4 md:w-40',
            'border border-gray-300 dark:border-gray-600',
            'focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-0',
            'text-sm capitalize'
          )}
        >
          <span>{activeTag === '' ? 'All Posts' : activeTag}</span>
          <Icons.chevronDown className='text-2xl' />
        </div>

        <div
          className={cn(
            'flex justify-between',
            'swap-on fill-primary',
            'flex items-center justify-between',
            'h-10 w-32 rounded-md px-4 md:w-40',
            'border border-gray-300 dark:border-gray-600',
            'focus:border-primary dark:focus:border-primary focus:outline-none focus:ring-0',
            'text-sm capitalize'
          )}
        >
          <span>{activeTag === '' ? 'All Posts' : activeTag}</span>
          <Icons.chevronUp className='text-2xl' />
        </div>
      </label>

      {/* MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className='absolute right-0 top-12 z-20'
          >
            <ul
              tabIndex={0}
              className={cn(
                'bg-base-200 menu flex-nowrap overflow-hidden overflow-y-auto',
                'h-60 w-32 p-2 md:w-40',
                'dark:shadow-4xl shadow-3xl',
                'rounded-lg border-none outline-none',
                'capitalize text-black hover:text-black dark:text-white dark:hover:text-white'
              )}
            >
              {/* setActiveTag */}
              <li>
                <div
                  className={cn({ active: activeTag === '' }, 'w-full p-2')}
                  onClick={() => handleSelectTag('')}
                >
                  All Posts
                </div>
              </li>
              {tags.map((tag) => (
                <li key={tag}>
                  <div
                    className={cn({ active: tag === activeTag }, 'w-full p-2')}
                    onClick={() => handleSelectTag(tag)}
                  >
                    {tag}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
