'use client';

import Image from 'next/image';
import { getCldImageUrl } from 'next-cloudinary';

import { cn } from '@/lib/utils';

type CloudinaryImgType = {
  publicId: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryImg({
  publicId,
  height = 411,
  width = 731,
  alt,
  className,
  mdx = false,
}: CloudinaryImgType) {
  const urlBlurred = getCldImageUrl({
    width: 10,
    height: 10,
    src: publicId,
    effects: [{ blur: '50' }],
  });

  const urlImage = getCldImageUrl({
    width: width,
    height: height,
    src: publicId,
  });

  return (
    <figure
      className={cn(
        className,
        'shadow-4xl dark:shadow-base-content/10 relative aspect-video rounded-lg shadow-black/50'
      )}
    >
      {/* Blurred Image */}
      <Image
        fill
        // sizes='(max-width: 640px) 100vw'
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 569px, (max-width: 1024px) 650px, 731px'
        src={urlBlurred}
        alt={alt}
        className={cn(mdx && '!m-0', 'aspect-video')}
      />
      {/* Real Image */}
      <Image
        fill
        sizes='(max-width: 640px) 100vw, (max-width: 768px) 569px, (max-width: 1024px) 650px, 731px'
        src={urlImage}
        alt={alt}
        className={cn(mdx && '!m-0', 'aspect-video')}
      />
    </figure>
  );
}

{
  /**/
}
