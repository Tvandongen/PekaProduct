import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        peka: {
          green: '#006838',
          'green-light': '#4CAF50',
          'green-dark': '#004D28',
          'green-50': '#E8F5ED',
          'green-100': '#C8E6D0',
          accent: '#E8502B',
          'accent-light': '#FF7043',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
