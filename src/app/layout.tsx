import { config } from '@fortawesome/fontawesome-svg-core';
import { Inter } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import '@fortawesome/fontawesome-svg-core/styles.css';

import { getMetaData } from '@/lib/getMetaData';

import Navbar from '@/components/navbar/Navbar';

import { Providers } from '@/app/providers';

// prevent fontawesome from adding its CSS since we did it manually
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

const CustomMetaData = {
  siteName: 'awandri.com',
  description:
    'A Showcase of My Project, Blogs, and All About Web Development. ',
  author: 'Andi Setiawan',
  userName: 'Frontend Developer',
  ogType: 'general',
};

export const metadata = getMetaData(CustomMetaData);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en-US'
      className='transition-colors duration-200 ease-linear'
      data-theme='night'
      suppressHydrationWarning={true}
    >
      <body className={inter.className}>
        <Providers>
          <main>
            <div className='layout'>
              <Navbar />
              {children}
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
