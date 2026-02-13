/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx,mdx}',
    './components/**/*.{js,jsx,mdx}',
    './app/**/*.{js,jsx,mdx}',
    './src/**/*.{js,jsx,mdx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        lightGreen:'#ECF4E9',
        primaryLight: 'hsl(var(--primary-light))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: 'hsl(var(--secondary))',
        secondaryLight: 'hsl(var(--secondary-light))',
        border: 'hsl(var(--border))',
      },
    },
  },
  plugins: [],
};
