/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'futura': ['Orbitron', 'Arial', 'sans-serif'],
      },
      colors: {
        neon: {
          blue: '#00f5ff',
          cyan: '#0ff',
          purple: '#bf00ff',
          pink: '#ff0080',
          green: '#39ff14',
          orange: '#ff8c00',
        },
        dark: {
          900: '#0a0a0f',
          800: '#121218',
          700: '#1a1a24',
          600: '#252530',
        },
      },
      animation: {
        'gradient': 'gradient 3s ease infinite',
        'pulse-neon': 'pulse-neon 2s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'cursor': 'cursor 1s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'pulse-neon': {
          '0%': { boxShadow: '0 0 5px #00f5ff, 0 0 10px #00f5ff, 0 0 15px #00f5ff' },
          '100%': { boxShadow: '0 0 10px #00f5ff, 0 0 20px #00f5ff, 0 0 30px #00f5ff' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        cursor: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        glow: {
          '0%': { textShadow: '0 0 10px currentColor' },
          '100%': { textShadow: '0 0 20px currentColor, 0 0 30px currentColor' },
        },
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
    },
  },
  plugins: [],
}
