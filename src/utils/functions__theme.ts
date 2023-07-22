export const services = {
  toCapitalize: (pokemon: any ) => {
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1)
  }
}