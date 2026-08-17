import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0C0A',
          elevated: '#15170F',
          panel: '#181A12',
        },
        ink: {
          DEFAULT: '#F3EFE4',
          muted: 'rgba(243, 239, 228, 0.64)',
          faint: 'rgba(243, 239, 228, 0.38)',
          line: 'rgba(243, 239, 228, 0.1)',
        },
        stamp: {
          DEFAULT: '#C1442D',
          bright: '#E15A3F',
          dim: '#8C321F',
        },
        thread: {
          DEFAULT: '#C9A227',
          bright: '#E4C04A',
          dim: '#8C7119',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        content: '1440px',
      },
      transitionTimingFunction: {
        decel: 'cubic-bezier(.16,1,.3,1)',
        smooth: 'cubic-bezier(.65,0,.35,1)',
      },
      backgroundImage: {
        'grid-technical':
          'linear-gradient(rgba(243,239,228,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(243,239,228,0.05) 1px, transparent 1px)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
