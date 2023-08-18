/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
      './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
        fontFamily: {
            // Override base font
            'sans': 'Martian Mono Variable, sans-serif'
        },
        keyframes: {
            'animated-gradient': {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '200% 50%' },
            }
        },
        backgroundSize: {
            '1000': '200%'
        },
        animation: {
            'header-gradient': 'animated-gradient 5s linear infinite'
        }
    },
  },
  plugins: [],
}

