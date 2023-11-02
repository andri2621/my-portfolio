import React from 'react';

import CloudinaryImg from '@/components/image/CloudinaryImage';
import CustomImage from '@/components/image/CustomImage';

import bgOpengraph from '~/images/bg-opengraph.jpg';

export default function AboutPage() {
  return (
    <div className='flex flex-col gap-8 py-24'>
      <div>About Page</div>
      <div>Cloudinary Image</div>
      <CloudinaryImg
        publicId='photo-1682687982167-d7fb3ed8541d_lvoyk4'
        width={731}
        height={411}
        alt=''
      />

      <span>ini Next Image Fill</span>
      <CustomImage
        src={bgOpengraph}
        alt=''
        // width={731}
        // height={411}
        fill
        ImageClassName='rounded-lg aspect-video'
      />
    </div>
  );
}
