import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
  "primary": "#C62828",
  "secondary": "#775a00",
  "accent": "#4b6f60",
  "background": "#FDFCF8",
  "surface": "#FFFFFF",
  "ink": "#111418",
  "muted": "#6B7280",
  "dark": "#2e3135"
},
      fontFamily: {
  "heading": [
    "Bodoni Moda",
    "sans-serif"
  ],
  "body": [
    "Archivo",
    "sans-serif"
  ],
  "display": [
    "Bodoni Moda",
    "serif"
  ]
},
      fontSize: {},
      spacing: {},
      borderRadius: {},
      boxShadow: {
  "card": "0 4px 12px rgba(0,0,0,0.06)",
  "elevated": "0 10px 30px rgba(0,0,0,0.12)"
},
    },
  },
  plugins: [],
};

export default config;
