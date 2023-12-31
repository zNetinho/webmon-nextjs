import Filtro from '@/components/Filtro';
import Link from '@/components/Link';
import ListaCard from '@/components/ListCard';
import { getData } from '@/data/services/busca-dados';
import React from 'react'

async function getStaticProps() {
  const data = await getData();

  const listaDePokemon = await Promise.all(data.map(async(pokemon: any) => {
    const responseApi = await fetch(pokemon.url);

    if(!responseApi.ok) {
      throw new Error('Erro ao carregar os detalhes do pokemon')
    }
    console.log(responseApi)
    const detailsPokemon = await responseApi.json();
    return {
      name: detailsPokemon.name,
      url: detailsPokemon.url,
      id: detailsPokemon.id,
      details: detailsPokemon,
    }
  }))
  return listaDePokemon
}


export default async function page() {
  const listaDePokemon = await getStaticProps();
  // criar state para controlar a paginação
  return (
    <>
    {/* <Filtro /> */}
      <div className='w-full p-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white'>
        <ListaCard 
          lista={listaDePokemon}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link 
              href='/'
              textAnchor='Proxima pagina'
            />
          </li>        
        </ul>
      </div>
    </>
)
}
