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
          green: '#10B981',
          amber: '#F59E0B',
          red: '#EF4444',
        },
        background: {
          white: '#FFFFFF',
          'off-white': '#F9FAFB',
          'light-grey': '#F3F4F6',
          dark: '#111827',
          'dark-surface': '#1F2937',
        },
        text: {
          heading: '#111827',
          body: '#374151',
          muted: '#6B7280',
          inverse: '#FFFFFF',
        },
        border: '#E5E7EB',
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['32px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1-desktop': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2-mobile': ['24px', { lineHeight: '1.2', fontWeight: '600' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3-mobile': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-desktop': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-mobile': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-desktop': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        button: ['16px', { fontWeight: '600' }],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '80': '80px',
        '120': '120px',
      },
      borderRadius: {
        button: '8px',
        card: '12px',
        badge: '6px',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'card-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'pricing-featured': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      maxWidth: {
        content: '1200px',
        hero: '1000px',
      },
      height: {
        nav: '72px',
      },
      screens: {
        'mobile': '375px',
        'tablet': '768px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [],
}

export default config
