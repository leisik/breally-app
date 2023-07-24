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
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'imageSize' : '516px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1536px',
      },
      colors: {
        buttonPurple : '#DAC2F2',
        helpTextGreen: '#5EDC4B',
        backgroundPrimary: '#FFFFFF',
        backgroundSecondary: '#231E1E',
        textPrimary: '#231E1E',
        textSecondary: '#F1F0F0',
        textTertiaty: '#989898',
      }
    },
  },
  plugins: [],
}
