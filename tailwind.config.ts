import daisyuiThemes from 'daisyui/src/theming/themes';
import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
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
        primary: '#14b8a6',
        secondary: '#ef9fbc',
        accent: '#eeaf3a',
        neutral: '#291534',
        dark: '#291334',
        base: { 100: '#faf7f5' },
        info: '#3abff8',
        success: '#36d399',
        warning: '#fbbd23',
        error: '#f87272',
        lightpale: '#988B9C',
        darkpale: '#666A77',
        darkmodal: '#1D283A',
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
    },
  },
  // plugins: [require('@tailwindcss/forms'), require('daisyui')], //! Default setting from template
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...daisyuiThemes['[data-theme=cupcake]'],
          primary: '#14b8a6',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291534',
          base: { 100: '#faf7f5' },
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',

          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0.5rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '1px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
      {
        night: {
          ...daisyuiThemes['[data-theme=night]'],
          primary: '#14b8a6',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#291534',
          base: { 100: '#faf7f5' },
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
  },
} satisfies Config;
