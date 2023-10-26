import Image from 'next/image';

import logger from '@/lib/logger';
import { cn } from '@/lib/utils';

type Props = {
  src: string;
  alt: string;
  priority?: string;
  className?: string;
};

export default async function CustomImage({
  src,
  alt,
  priority,
  className,
}: Props) {
  const prty = priority ? true : false;

  try {
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
  } catch (e) {
    // Handle errors here, e.g., log the error or show a placeholder image.
    logger(e);
    return (
      <Image src='/images/bg-opengraph.jpg' alt='' width={731} height={411} />
    );
  }
}
