import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#faf7f0',
        secondary: '#d8d2c2',
        'base-white': '#faf7f0',
        'base-black': '#4a4947',
      },
    },
  },
  plugins: [],
};

export default config;
