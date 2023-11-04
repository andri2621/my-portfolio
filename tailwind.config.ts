import daisyuiThemes from 'daisyui/src/theming/themes';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}'],
  darkMode: ['class', '[data-theme="night"]'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '2xl': '1320px',
      },
      colors: {
        white: '#FFFFFF',
        night: '#0f1729',
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
      boxShadow: {
        '3xl': '0px 0px 16px 2px rgba(0,0,0,0.2)',
        '4xl': '0px 0px 16px 2px rgba(255,255,255,0.2)',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },

      // PROSE MARKDOWN STYLE

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      typography: ({ theme }: any) => ({
        custom: {
          css: {
            '--tw-prose-hr': theme('colors.teal[300]'),
            '--tw-prose-quote-borders': theme('colors.teal[500]'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        emerald: {
          ...daisyuiThemes['[data-theme=emerald]'],
          primary: '#14b8a6',
          secondary: '#828DF8',
          accent: '#F471B5',
          white: '#FFFFFF',
        },
      },
      {
        night: {
          ...daisyuiThemes['[data-theme=night]'],
          primary: '#14b8a6',
          white: '#FFFFFF',
        },
      },
    ],
  },
} satisfies Config;
