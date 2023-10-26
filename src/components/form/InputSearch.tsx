'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import StyledInput from '@/components/form/Input';

type InputSearchProps = React.HTMLAttributes<HTMLFormElement>;

export function InputSearch({ className, ...props }: InputSearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    alert('Still Under Construction');

    // return toast({
    //   title: 'Not implemented',
    //   description: "We're still working on the search.",
    // });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn('relative w-full', className)}
      {...props}
    >
      <StyledInput
        type='search'
        placeholder='Search blog, project, docs...'
        className='bg-base-100/50 h-8 w-full sm:w-64 sm:pr-12'
      />
      <kbd className='border-base-content/70 pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center justify-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium sm:flex'>
        <span className='text-xs'>⌘</span>K
      </kbd>
    </form>
  );
}
