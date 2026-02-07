import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366F1',
          hover: '#4F46E5',
          light: '#EEF2FF',
        },
        accent: {
          DEFAULT: '#06B6D4',
          light: '#ECFEFF',
        },
        safety: {
          safe: '#10B981',
          caution: '#F59E0B',
          danger: '#EF4444',
        },
        surface: {
          white: '#FFFFFF',
          off: '#F9FAFB',
          light: '#F3F4F6',
          dark: '#111827',
          'dark-elevated': '#1F2937',
        },
        heading: '#111827',
        body: '#374151',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-desktop': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.07)',
        'lg': '0 10px 25px rgba(0,0,0,0.1)',
        'xl': '0 20px 40px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        'button': '8px',
        'card': '12px',
        'badge': '6px',
      },
    },
  },
  plugins: [],
}

export default config
