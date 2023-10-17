import { LucideIcon } from 'lucide-react';
import * as React from 'react';
import { IconType } from 'react-icons';

import { cn } from '@/lib/utils';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/UnstyledLink';

const IconLinkVariant = [
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
] as const;

type IconLinkProps = {
  isDarkBg?: boolean;
  variant?: (typeof IconLinkVariant)[number];
  icon?: IconType | LucideIcon;
  classNames?: {
    icon?: string;
  };
} & Omit<UnstyledLinkProps, 'children'>;

const IconLink = React.forwardRef<HTMLAnchorElement, IconLinkProps>(
  (
    {
      className,
      icon: Icon,
      variant = 'outline',
      isDarkBg = false,
      classNames,
      ...rest
    },
    ref
  ) => {
    return (
      <UnstyledLink
        ref={ref}
        type='button'
        className={cn(
          'inline-flex items-center justify-center rounded font-medium',
          'focus:outline-none focus-visible:ring focus-visible:ring-teal-500',
          'shadow-sm',
          'transition-colors duration-75',
          'min-h-[28px] min-w-[28px] p-1 md:min-h-[34px] md:min-w-[34px] md:p-2',
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-teal-500 text-white',
              'border border-teal-600',
              'hover:bg-teal-600 hover:text-white',
              'active:bg-teal-700',
              'disabled:bg-teal-700',
            ],
            variant === 'outline' && [
              'text-teal-500',
              'border border-teal-500',
              'hover:bg-teal-50 active:bg-teal-100 disabled:bg-teal-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-teal-500',
              'shadow-none',
              'hover:bg-teal-50 active:bg-teal-100 disabled:bg-teal-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-gray-700',
              'border border-gray-300',
              'hover:text-dark hover:bg-gray-100',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'dark' && [
              'bg-gray-900 text-white',
              'border border-gray-600',
              'hover:bg-gray-800 active:bg-gray-700 disabled:bg-gray-700',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          className
        )}
        {...rest}
      >
        {Icon && <Icon size='1em' className={cn(classNames?.icon)} />}
      </UnstyledLink>
    );
  }
);

export default IconLink;
