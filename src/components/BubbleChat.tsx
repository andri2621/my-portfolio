import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { cn, getIcon } from '@/lib/utils';

import { socialLink } from '@/constant/config';

type BubbleProps = {
  className?: string;
};

export default function BubbleChat({ className }: BubbleProps) {
  return (
    <>
      <div className={cn(className, 'chat chat-start')}>
        <div className='chat-image avatar'>
          <div className='bg-neutral w-10 rounded-full'>
            <Image src='/images/MyPhoto.png' alt='chat photo' fill />
          </div>
        </div>
        <div className='chat-bubble bg-base-200 w-full max-w-[290px]'>
          Lets get in touch.
          <br />
          <br />
          <div className='flex flex-wrap gap-3'>
            {socialLink.map((social) => {
              const SocialIcon = getIcon(social.label.toLowerCase());
              return (
                <Link
                  key={social.label}
                  target='_blank'
                  href={social.link}
                  className='hover:text-primary cursor-newtab flex items-center gap-1'
                >
                  {SocialIcon && <SocialIcon className='h-4 w-4' />}
                  {social.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
