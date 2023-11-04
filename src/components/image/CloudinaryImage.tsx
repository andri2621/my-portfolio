import Image from 'next/image';
import { getCldImageUrl } from 'next-cloudinary';

import { cn } from '@/lib/utils';

type CloudinaryImageType = {
  publicId: string;
  alt: string;
  height?: number;
  width?: number;
  className?: string;
  mdx?: boolean;
} & React.ComponentPropsWithoutRef<'figure'>;

export default function CloudinaryImage({
  publicId,
  height = 411,
  width = 731,
  alt,
  className,
  mdx = false,
}: CloudinaryImageType) {
  const blurImg = getCldImageUrl({
    width: 10,
    height: 7,
    src: publicId,
    effects: [{ blur: '100' }],
  });

  const mainImg = getCldImageUrl({
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
        src={blurImg}
        alt={alt}
        className={cn(mdx && '!m-0', 'z-0 aspect-video rounded-lg')}
        {...(mdx
          ? {
              sizes:
                '(min-width: 1040px) 731px, (min-width: 780px) 650px, (min-width: 660px) 569px, calc(86.47vw + 16px)',
            }
          : {
              sizes: '(min-width: 1280px) 1100px, calc(85.94vw + 17px)',
            })}
      />
      {/* Main Image */}

      <Image
        fill
        src={mainImg}
        alt={alt}
        className={cn(mdx && '!m-0', 'z-10 aspect-video rounded-lg')}
        {...(mdx
          ? {
              sizes:
                '(min-width: 1040px) 731px, (min-width: 780px) 650px, (min-width: 660px) 569px, calc(86.47vw + 16px)',
            }
          : {
              sizes: '(min-width: 1280px) 1100px, calc(85.94vw + 17px)',
            })}
      />
    </figure>
  );
}
