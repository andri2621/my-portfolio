'use client';

import { ThemeProvider as NextThemeProviders } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProviders
      attribute='data-theme'
      defaultTheme='cupcake'
      enableColorScheme={true}
      themes={['cupcake', 'night']}
    >
      {children}
    </NextThemeProviders>
  );
}
