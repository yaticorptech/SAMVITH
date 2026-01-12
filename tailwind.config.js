module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '200%': '200%',
      },
      colors: {
        neutral: {
          200: "#f4eee4", // your custom color
        },
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scroll: { // existing horizontal scroll
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slide: { // vertical slide
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(10px)' },
        },
        marquee: { // continuous "train-like" horizontal slide
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        gradient: 'gradient 5s ease infinite',
        scroll: 'scroll 15s linear infinite',
        slide: 'slide 3s ease-in-out infinite',
        marquee: 'marquee 20s linear infinite', // continuous horizontal slide
      },
    },
  },
  plugins: [],
}
