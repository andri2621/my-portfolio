'use client';

import { ThemeProvider as NextThemeProviders } from 'next-themes';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProviders
      attribute='data-theme'
      defaultTheme='night'
      enableColorScheme={true}
      themes={['emerald', 'night']}
    >
      <ToastContainer
        autoClose={5000}
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
