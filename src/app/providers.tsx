'use client';

import { ThemeProvider as NextThemeProviders } from 'next-themes';
import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getFromLocalStorage } from '@/lib/utils';

import { blockDomainMeta } from '@/constant/env';

export function Providers({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Don't increment views if not on main domain
    if (
      window.location.host !==
        (process.env.NEXT_PUBLIC_BLOCK_DOMAIN_WHITELIST || 'awandri.com') &&
      blockDomainMeta
    ) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false');
        // reload page to make changes
        window.location.reload();
      }
    }
  }, []);

  return (
    <NextThemeProviders
      attribute='data-theme'
      defaultTheme='night'
      enableColorScheme={true}
      themes={['emerald', 'night']}
    >
      <ToastContainer
        autoClose={3000}
        position='top-center'
        newestOnTop={true}
        closeButton={true}
        draggable
        draggablePercent={60}
        draggableDirection='y'
        limit={5}
        pauseOnFocusLoss={false}
        theme='dark'
      />
      {children}
    </NextThemeProviders>
  );
}
