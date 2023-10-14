'use client';

import { ThemeProvider as NextThemeProviders } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProviders
      attribute='data-theme'
      defaultTheme='emerald'
      enableColorScheme={true}
      themes={['emerald', 'night']}
    >
      {children}
    </NextThemeProviders>
  );
}
