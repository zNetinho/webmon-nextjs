export async function getData() {

  const MaxPokemons = 251
  const URL_API = 'https://pokeapi.co/api/v2/pokemon?limit='
  const data = await fetch(`${URL_API}${MaxPokemons}`);
  if(!data.ok) {
    throw new Error("Por favor consulte um especialista")
  }
  const dataResolved = await data.json();
  
  const response_api = dataResolved.results;

  return response_api;

}