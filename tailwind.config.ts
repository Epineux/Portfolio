import type { Config } from "tailwindcss";

export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
      colors: {
        primary: 'var(--background-color)',
        accent: {
          DEFAULT: 'var(--accent-color)',
          hover: '#219EBC',
        },
        secondary: {
          DEFAULT: 'var(--secondary-color)',
          hover: '#FB8500',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
