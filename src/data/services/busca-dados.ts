export async function getData() {
  const MaxPokemons = 20
  const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit='
  const data = await fetch(`${URL_API}${MaxPokemons}`);
  if(!data.ok) {
    throw new Error("Por favor consulte um especialista")
  }
  const dataResolved = await data.json();
  
  const response_api = dataResolved.results;

  return response_api;

}
export async function buscaPokemon(id: number) {
  const URL_API = `https://pokeapi.co/api/v2/pokemon/${id}`
  const pokemonClicado = await fetch(URL_API);
  if(!pokemonClicado.ok) {
    throw new Error('Não encontrei esse pokemon por id')
  }

  const result = await pokemonClicado.json();
  const pokemon = result.id === id ? result : null;

  return result;

}