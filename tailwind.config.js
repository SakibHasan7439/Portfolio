/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#0f172a',
          925: '#0c1222',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
        'gradient-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 50%, rgba(59, 130, 246, 0.08), transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
