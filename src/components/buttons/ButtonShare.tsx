'use client';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'next-share';
import * as React from 'react';
import { toast } from 'react-toastify';

import { cn } from '@/lib/utils';

import { Icons } from '@/constant/IconsData';

type ShareProps = {
  slug: string;
  title: string;
  type: 'blogs' | 'projects';
};

export default function ButtonShare({ slug, type, title }: ShareProps) {
  const shareUrl = `https://awandri.com/${type}/${slug}/`;

  const [isOpen, setIsOpen] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Copied to clipboard!');
  };

  return (
    <div>
      <button
        className='btn btn-primary btn-sm inline-flex items-center gap-x-1'
        onClick={() => setIsOpen(true)}
      >
        <span>Share This Article</span>
        <Icons.share className='h-4 w-4' />
      </button>
      <dialog
        id='share-modal-main'
        className={cn('modal modal-bottom xs:modal-middle', {
          'modal-open': isOpen === true,
        })}
      >
        <div className='modal-box shadow-4xl bg-base-200 dark:shadow-base-content/10 xs:max-w-xs shadow-black/50'>
          {/* <!-- Modal header --> */}
          <div className='flex items-center justify-between rounded-t border-b pb-4 dark:border-gray-600'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Share Article
            </h3>
            <button
              type='button'
              className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
              onClick={() => setIsOpen(false)}
            >
              <Icons.close className='h-6 w-6' />
            </button>
          </div>
          {/* Modal Body */}
          <div className='pt-4'>
            <ul className='flex flex-wrap justify-between'>
              <li className='flex items-center justify-center'>
                <FacebookShareButton url={shareUrl} blankTarget={true}>
                  <FacebookIcon size={32} round={false} borderRadius={8} />
                </FacebookShareButton>
              </li>
              <li className='flex items-center justify-center rounded-[4px] border border-white'>
                <TwitterShareButton
                  url={shareUrl}
                  title={title}
                  blankTarget={true}
                >
                  <TwitterIcon size={32} round={false} borderRadius={8} />
                </TwitterShareButton>
              </li>
              <li className='flex items-center justify-center'>
                <LinkedinShareButton url={shareUrl} blankTarget={true}>
                  <LinkedinIcon size={32} round={false} borderRadius={8} />
                </LinkedinShareButton>
              </li>
              <li className='flex items-center justify-center'>
                <WhatsappShareButton
                  url={shareUrl}
                  title={title}
                  separator=':: '
                  blankTarget={true}
                >
                  <WhatsappIcon size={32} round={false} borderRadius={8} />
                </WhatsappShareButton>
              </li>
              <li className='flex items-center justify-center'>
                <TelegramShareButton
                  url={shareUrl}
                  title={title}
                  blankTarget={true}
                >
                  <TelegramIcon size={32} round={false} borderRadius={8} />
                </TelegramShareButton>
              </li>
              <li
                onClick={handleCopy}
                className='flex cursor-pointer items-center justify-center'
              >
                <Icons.copy className='h-8 w-8' />
              </li>
            </ul>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button onClick={() => setIsOpen(false)} className='cursor-default'>
            close
          </button>
        </form>
      </dialog>
    </div>
  );
}
