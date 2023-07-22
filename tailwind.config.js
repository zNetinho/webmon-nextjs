/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo-wallpaper': "url('/pokemon_wallpaper.jpg')",
      },
      fontFamily: {
        'roboto': ['Poppins', 'sans-serif']
      },
      colors: {
        grass: '#78C850',
        water: '#6890F0',
        flying: '#A890F0',
        normal: '#A8A878',
        fire: '#F08030',
        rock: '#B8A038',
        poison: '#A040A0',
        electric: '#F8D030',
        psychic: '#F85888',
        fighting: '#C03028',
        ground: '#E0C068',
        ice: '#98D8D8',
        bug: '#A8B820',
        ghost: '#705898',
        steel: '#B8B8D0',
        dragon: '#7038F8',
        dark: '#705848',
        fairy: '#EE99AC',
      }
    },
  },
  plugins: [],
}
