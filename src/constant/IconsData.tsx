import { IconType } from 'react-icons';
import {
  BiLogoAngular as IconAngular,
  BiLogoReact as IconReact,
  BiLogoRedux as IconRedux,
  BiLogoSass as IconScss,
  BiLogoTailwindCss as IconTailwind,
} from 'react-icons/bi';
import { TbBrandNextjs as IconNext } from 'react-icons/tb';

type IconProps = {
  name: string;
  icon: IconType;
  badgeType?: string;
};

export const IconsData: IconProps[] = [
  {
    name: 'react',
    icon: IconReact,
    badgeType: 'badge-info',
  },
  {
    name: 'nextjs',
    icon: IconNext,
    badgeType: 'badge-ghost',
  },
  {
    name: 'angular',
    icon: IconAngular,
    badgeType: 'badge-error',
  },
  {
    name: 'tailwind',
    icon: IconTailwind,
    badgeType: 'badge-primary',
  },
  {
    name: 'redux',
    icon: IconRedux,
    badgeType: 'badge-secondary',
  },
  {
    name: 'scss',
    icon: IconScss,
    badgeType: 'badge-accent',
  },
];
