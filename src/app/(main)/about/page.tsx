import React from 'react';

import CloudinaryImg from '@/components/CloudinaryImage';

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
      <div>Custom Image</div>
    </div>
  );
}
