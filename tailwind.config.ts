import type { Config } from 'tailwindcss'

const config: Config = {
  future: { hoverOnlyWhenSupported: true },
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0B0D1B',
          secondary: '#121529',
          card: '#161936',
          'card-hover': '#1F2347',
        },
        space: {
          dark: '#0B0D1B',
          card: '#161936',
          accent: '#F89B88',
          'accent-end': '#F37970',
          purple: '#3E3661',
        },
        orange: {
          DEFAULT: '#F89B88',
          bright: '#F37970',
          dim: 'rgba(248,155,136,0.15)',
          glow: 'rgba(248,155,136,0.35)',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B3B9C9',
          muted: '#717A94',
        },
        line: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          orange: 'rgba(248,155,136,0.30)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(52px,8vw,100px)', { lineHeight: '1.0', fontWeight: '800' }],
        'h2': ['clamp(32px,5vw,64px)', { lineHeight: '1.1', fontWeight: '700' }],
        'h3': ['clamp(22px,3vw,36px)', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['clamp(18px,2.5vw,26px)', { lineHeight: '1.3', fontWeight: '700' }],
        'label': ['11px', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.2em' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      animation: {
        'particle-drift': 'particleDrift 20s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'trace-line': 'traceLine 1.5s ease-out forwards',
      },
      keyframes: {
        particleDrift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(10px, -15px)' },
          '50%': { transform: 'translate(-8px, -25px)' },
          '75%': { transform: 'translate(12px, -10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        traceLine: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
        'peach-gradient': 'linear-gradient(90deg, #F89B88 0%, #F37970 100%)',
        'violet-gradient': 'linear-gradient(90deg, #3E3661 0%, #2A2346 100%)',
        'space-gradient': 'radial-gradient(ellipse at 60% -20%, #1c2145 0%, #0b0d1b 75%)',
      },
      clipPath: {
        'notch-sm': 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
        'notch-md': 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
        'notch-lg': 'polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
}

export default config
