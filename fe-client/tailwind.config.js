/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-gray': '#f6f7fb',
        'dark-blue': '#292c4b',
        'dark-gray': '#544d4d',
      },
      width: {
        '10/10': '10%',
        '30/10': '30%',
        '35/10': '35%',
        '55/10': '55%',
        '9/10': '90%',
      },
      height: {
        '10/10': '10%',
        '15/10': '15%',
        '55/10': '55%',
        '66': '264',
        '68': '272',
        '9/10': '90%',
        '8screen': '80vh',
        '9screen': '90vh',
      },
      borderRadius: {
        '50%': '50%',
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '75%',
        '3/5': '60%',
        '4/5': '80%',
        '9/10': '90%',
        'full': '100%',
      },
      maxHeight: {
        '1/2': '50%',
        '3/4': '75%',
        '9/10': '90%',
        '8screen': '80vh',
        '9screen': '90vh',
        'full': '100%',
      },
      margin: {
        '15': '60px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
