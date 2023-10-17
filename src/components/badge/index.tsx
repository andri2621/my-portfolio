'use client';

import clsx from 'clsx';
import React from 'react';

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
  <div className='flex flex-wrap gap-2'>
    {tags.map((tag) => {
      const selectedIcon = findIcon(tag);
      return (
        <div
          key={tag}
          className={clsx(
            selectedIcon && selectedIcon.badgeType,
            'badge badge-md badge-outline',
            'cursor-default',
            'gap-1',
            'capitalize'
          )}
        >
          {selectedIcon && <selectedIcon.icon size={18} />}
          <span>{tag}</span>
        </div>
      );
    })}
  </div>
);

const HiddenBadges: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className='dropdown dropdown-hover dropdown-bottom dropdown-end'>
    <label className='text-primary m-1 cursor-pointer font-medium'>
      +{tags.length} tags
    </label>
    <ul className='dropdown-content menu bg-base-200 rounded-box z-[1] max-w-md p-2 shadow'>
      {tags.map((tag) => {
        const selectedIcon = findIcon(tag);
        return (
          <li key={tag} className='capitalize'>
            <a>
              {selectedIcon && <selectedIcon.icon size={18} />}
              {tag}
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);

const Badge: React.FC<BadgeProps> = ({
  tags = ['uncategorized'],
  className,
}) => {
  const maxBadges = 2;
  const visibleBadges = tags.slice(0, maxBadges);
  const hiddenBadges = tags.slice(maxBadges);

  return (
    <div className={clsx(className, 'relative flex justify-between')}>
      <VisibleBadges tags={visibleBadges} />
      {hiddenBadges.length > 0 && <HiddenBadges tags={hiddenBadges} />}
    </div>
  );
};

export default Badge;
