import React from 'react';

import { cn, getIcon } from '@/lib/utils';

import { FEskills } from '@/constant/config';

export default function FEskill() {
  return (
    <>
      <h3>Frontend:</h3>
      <div className='mb-4'>
        The tech stack I most frequently use for my professional work.
      </div>

      <div className='flex flex-row flex-wrap gap-4'>
        {FEskills.map((skill) => {
          const SkillIcon = getIcon(skill.label.toLowerCase());
          return (
            <div
              key={skill.label}
              className={cn(
                'tooltip tooltip-primary',
                'hover:text-primary',
                'flex items-center justify-center'
              )}
              data-tip={skill.tooltip}
            >
              {SkillIcon && (
                <SkillIcon
                  className={cn('h-10 w-10', {
                    'h-8 w-8': skill.label === 'mui',
                  })}
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
