export const services = {
  capitalizeFirstLetter: (pokemon: any ) => {
    console.log(pokemon)

    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
  }
}