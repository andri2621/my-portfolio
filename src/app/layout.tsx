import { Inter } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';

import { getMetaData } from '@/lib/getMetaData';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

import { Providers } from '@/app/providers';

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
            <Navbar />
            <div className='layout'>{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
