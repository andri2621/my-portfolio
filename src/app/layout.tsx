import { config } from '@fortawesome/fontawesome-svg-core';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import * as React from 'react';

import '@/styles/globals.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import '@fortawesome/fontawesome-svg-core/styles.css';

import { Providers } from '@/app/providers';
import { siteConfig } from '@/constant/config';

// prevent fontawesome from adding its CSS since we did it manually
config.autoAddCss = false;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    creator: '@andri2621',
  },
  authors: [
    {
      name: 'Andi Setiawan',
      url: 'https://awandri.com',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en-US'
      className='transition duration-200 ease-linear'
      data-theme='emerald'
      suppressHydrationWarning
    >
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
