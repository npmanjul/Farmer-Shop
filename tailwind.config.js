/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImageLogin': 'url(/loginBackground.png)',
        'backgroundImageSignup': 'url(./src/image/signupBackground.png)',
      },
    },
  },
  plugins: [

  ],
}