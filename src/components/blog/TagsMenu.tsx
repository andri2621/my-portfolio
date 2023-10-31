import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils';

import UnstyledLink from '@/components/links/UnstyledLink';

type TagsMenuProps = {
  tags: string[];
  tagCounts: Record<string, number>;
};

export default function TagsMenu({ tags, tagCounts }: TagsMenuProps) {
  const pathname = usePathname();
  return (
    <div className='hidden text-sm lg:block'>
      <ul
        className={cn(
          'menu h-fit max-h-[60vh] w-48',
          'rounded-md border border-gray-300 dark:border-gray-600',
          'flex-nowrap overflow-y-auto'
        )}
      >
        <li>
          <UnstyledLink
            href='/blogs'
            className={cn('font-semibold uppercase', {
              'text-primary': pathname.startsWith('/blog'),
            })}
          >
            All Posts
          </UnstyledLink>
        </li>

        {tags.map((tag) => (
          <li key={tag}>
            {pathname.split('/tags/')[1] === tag ? (
              <div className='text-primary flex justify-between gap-2 font-semibold'>
                <span className='uppercase'>{tag}</span>
                <span>({tagCounts[tag]})</span>
              </div>
            ) : (
              <UnstyledLink
                href={`/tags/${tag}`}
                className='flex justify-between gap-2'
              >
                <span className='uppercase'>{tag}</span>
                <span>({tagCounts[tag]})</span>
              </UnstyledLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
