import Image, { ImageProps } from 'next/image';

import { cn, isRemoteURL } from '@/lib/utils';

type Props = {
  alt: string;
  priority?: boolean;
  className?: string;
  ImageClassName?: string;
  mdx?: boolean;
} & (
  | { width: string | number; height: string | number }
  | { fill: boolean; width?: string | number; height?: string | number }
) &
  ImageProps;

export default function CustomImage({
  src,
  width,
  height,
  alt,
  className,
  ImageClassName,
  priority = false,
  fill = false,
  mdx = false,
  ...rest
}: Props) {
  const widthIsSet = className?.includes('w-') ?? false;
  const isRemoteSrc = isRemoteURL(src);

  return (
    <figure
      className={cn(className, {
        'h-full w-full': !widthIsSet,
      })}
    >
      <Image
        className={cn(ImageClassName, 'mx-auto rounded-lg')}
        src={src}
        alt={alt}
        priority={priority}
        {...(mdx
          ? {
              sizes:
                '(min-width: 1040px) 731px, (min-width: 780px) 650px, (min-width: 660px) 569px, calc(86.47vw + 16px)',
            }
          : {
              sizes: '(min-width: 1280px) 1100px, calc(85.94vw + 17px)',
            })}
        {...(!fill ? { width, height } : {})}
        {...(!isRemoteSrc ? { placeholder: 'blur' } : {})}
        {...rest}
      />
    </figure>
  );
}
