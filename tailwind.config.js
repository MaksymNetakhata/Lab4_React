/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '456': '456px',
        '120': '120px',
        '200': '200px',
        '150': '150px',
        'huge': '0.5em',
      },
      backgroundImage: {
        'skype': "url('/images/skype.png')",
        'instagram': "url('/images/instagram.png')",
        'X': "url('/images/twitter.png')",
        'discord': "url('/images/discord.png')",
        'facebook': "url('/images/facebook.png')",
      }
    },
  },
  plugins: [],
}

