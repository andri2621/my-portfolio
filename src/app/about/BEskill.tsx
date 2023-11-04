import React from 'react';

import { cn, getIcon } from '@/lib/utils';

import { BEskills } from '@/constant/config';

export default function BEskill() {
  return (
    <>
      <h3>Backend:</h3>
      <div className='mb-4'>
        I am not an expert in backend development, but the following is a stack
        commonly used for my hobby projects.
      </div>

      <div className='flex flex-row gap-4'>
        {BEskills.map((skill) => {
          const SkillIcon = getIcon(skill.label.toLowerCase());
          return (
            <div
              key={skill.label}
              className={cn('tooltip tooltip-primary', 'hover:text-primary')}
              data-tip={skill.tooltip}
            >
              {SkillIcon && <SkillIcon className='h-10 w-10' />}
            </div>
          );
        })}
      </div>
    </>
  );
}
