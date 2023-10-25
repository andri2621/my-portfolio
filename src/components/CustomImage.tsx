import Image from 'next/image';

import { cn } from '@/lib/utils';

type Props = {
  src: string;
  alt: string;
  priority?: string;
  className?: string;
};

export default function CustomImage({ src, alt, priority, className }: Props) {
  const prty = priority ? true : false;

  return (
    <div className='h-full w-full'>
      <Image
        className={cn(className, 'mx-auto aspect-video rounded-lg')}
        src={src}
        alt={alt}
        width={731}
        height={411}
        priority={prty}
        loading='lazy'
      />
    </div>
  );
}
