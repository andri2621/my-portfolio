import React from 'react';

import { getIcon } from '@/lib/utils';

import UnderlineLink from '@/components/links/UnderlineLink';

import { currentLearn } from '@/constant/config';

export default function CurrentLearn() {
  return (
    <div className='flex flex-col gap-4'>
      {currentLearn.map((skill) => {
        const SkillIcon = getIcon(skill.label.toLowerCase());
        return (
          <div key={skill.label}>
            <div className='mb-4'>
              Learn {skill.label} in{' '}
              <UnderlineLink href='https://www.udemy.com/'>
                {skill.course}
              </UnderlineLink>{' '}
              course.
            </div>
            {SkillIcon && (
              <SkillIcon className='hover:text-primary h-10 w-10' />
            )}
          </div>
        );
      })}
    </div>
  );
}
