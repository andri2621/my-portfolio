'use client';

import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import { getIcon } from '@/lib/utils';
import { useClickOutside } from '@/hooks/useClickOutside';

type BadgeProps = {
  tags?: string[];
  className?: string;
  maxBadges?: number;
};

const VisibleBadges: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className='mb-1 flex flex-wrap gap-2'>
    {tags.map((tag) => {
      const SelectedIcon = getIcon(tag);
      return (
        <div
          key={tag}
          className={clsx(
            // selectedIcon && selectedIcon.badgeType,
            // 'badge badge-sm badge-outline',
            'badge badge-accent badge-outline badge-sm',
            'cursor-default',
            'items-center justify-center gap-1 py-2',
            'font-semibold uppercase'
          )}
        >
          {SelectedIcon && <SelectedIcon size={14} />}
          <span>{tag}</span>
        </div>
      );
    })}
  </div>
);

const Badge: React.FC<BadgeProps> = ({
  tags = ['uncategorized'],
  className,
  maxBadges = 2,
}) => {
  const visibleBadges = tags.slice(0, maxBadges);
  const hiddenBadges = tags.slice(maxBadges);

  const [isOpen, setIsOpen] = useState(false);

  const boxRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(boxRef, () => {
    setIsOpen(false);
  });

  return (
    <div className={clsx(className, 'relative flex justify-between')}>
      <VisibleBadges tags={visibleBadges} />
      {/* Hidden Badges */}
      {hiddenBadges.length > 0 && (
        <div
          ref={boxRef}
          className='dropdown dropdown-bottom dropdown-end'
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsOpen((prev) => !prev);
          }}
        >
          <div className='text-accent m-0 cursor-pointer text-sm font-medium hover:underline'>
            +{hiddenBadges.length} tags
          </div>
          {isOpen && (
            <ul className='menu bg-base-200 rounded-box absolute right-0 top-full z-[1] max-w-md p-2 shadow'>
              {hiddenBadges.map((tag) => {
                const SelectedIcon = getIcon(tag);
                return (
                  <li key={tag} className='capitalize'>
                    <span className='p-1'>
                      {SelectedIcon && <SelectedIcon size={18} />}
                      {tag}
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Badge;
