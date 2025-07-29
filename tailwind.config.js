// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'quote-card-1': '#FDF6EC',
        'quote-card-2': '#E0F7FA',
        'quote-card-3': '#F3E5F5',
        'quote-card-4': '#FFF3E0',
      },
    },
  },
  safelist: [
    'bg-quote-card-1',
    'bg-quote-card-2',
    'bg-quote-card-3',
    'bg-quote-card-4',
  ],
  plugins: [],
};
