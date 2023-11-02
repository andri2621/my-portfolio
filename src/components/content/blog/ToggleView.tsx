import React from 'react';

import { cn } from '@/lib/utils';

import { Icons } from '@/constant/IconsData';

type ToggleViewProps = {
  viewStyle: string;
  onClick: () => void;
};

const ToggleView: React.FC<ToggleViewProps> = ({ viewStyle, onClick }) => {
  return (
    <div
      onClick={onClick}
      tabIndex={0}
      className={cn(
        'btn btn-outline',
        'flex gap-2',
        'h-10 min-h-0 w-[120px]',
        'font-normal capitalize',
        'rounded-md p-0',
        'border-gray-300 dark:border-gray-600',
        'hover:!bg-base-100 hover:!text-primary',
        'hover:border-primary dark:hover:border-primary'
      )}
    >
      {viewStyle === 'grid' && (
        <>
          <Icons.grid className='text-2xl' />
          <span>Grid View</span>
        </>
      )}
      {viewStyle === 'list' && (
        <>
          <Icons.list className='scale-110 text-2xl' />
          <span>List View</span>
        </>
      )}
    </div>
  );
};

export default ToggleView;
