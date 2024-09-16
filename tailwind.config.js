/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],//  Adjust the paths according to your project structure]
  theme: {
    extend: {
      keyframes: {
        flyInLeft:{
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        }    
    },
    animation:{
      flyInLeft:'flyInleft 1s ease-out forwards',
    }
  },
  variants: {},
  plugins: [],
}
}
