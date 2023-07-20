import Link from '@/components/Link';
import Props from '@/data/@types/IPokemon';
import { services } from '@/utils/functions__theme';
import ImageComponent from '@/components/ImageComponent';
import React from 'react'

export default function Card({ lista }: Props) {
  return (
    <>
      {lista.map((pokemon: any) => {
        return (
          <li key={pokemon.id}
              className='flex flex-col justify-center items-center border drop-shadow-md px-5 py-5
              bg-opacity-6 rounded-2xl shadow-lg backdrop-blur-8 border-opacity-90'>
            <p className='text-xl font-medium'>
              {services.capitalizeFirstLetter(pokemon.name)}
            </p>
            <ImageComponent
              src={pokemon.details.sprites.front_default}
              width={120}
              height={150}
              alt={`Foto do pokemon ${pokemon.name}`}
            />
            <Link
              href={`/pokemon/${pokemon.id}`}
              textAnchor='Veja mais detalhes'
              styleClass='p-5 bg-green-100 border rounded-xl text-black'
            />
          </li>
        )
      })}
    </>
  )
}
