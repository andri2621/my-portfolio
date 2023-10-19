'use client';

import clsx from 'clsx';
import React, { useRef, useState } from 'react';

import { useClickOutside } from '@/lib/utils';

import { IconsData } from '@/constant/IconsData';

type BadgeProps = {
  tags?: string[];
  className?: string;
};

const findIcon = (tagName: string) => {
  const tag = tagName.toLowerCase();
  return IconsData.find((icon) => icon.name.toLowerCase() === tag);
};

const VisibleBadges: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className='mb-1 flex flex-wrap gap-2'>
    {tags.map((tag) => {
      const selectedIcon = findIcon(tag);
      return (
        <div
          key={tag}
          className={clsx(
            selectedIcon && selectedIcon.badgeType,
            'badge badge-sm badge-outline',
            'cursor-default',
            'gap-1',
            'capitalize'
          )}
        >
          {selectedIcon && <selectedIcon.icon size={14} />}
          <span>{tag}</span>
        </div>
      );
    })}
  </div>
);

const Badge: React.FC<BadgeProps> = ({
  tags = ['uncategorized'],
  className,
}) => {
  const maxBadges = 2;
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
          <div className='text-primary m-0 cursor-pointer text-sm font-medium'>
            +{hiddenBadges.length} tags
          </div>
          {isOpen && (
            <ul className='menu bg-base-200 rounded-box absolute right-0 top-full z-[1] max-w-md p-2 shadow'>
              {hiddenBadges.map((tag) => {
                const selectedIcon = findIcon(tag);
                return (
                  <li key={tag} className='capitalize'>
                    <span className='p-1'>
                      {selectedIcon && <selectedIcon.icon size={18} />}
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
