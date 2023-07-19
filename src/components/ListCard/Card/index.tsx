import Link from '@/components/Link';
import Image from 'next/image'
import React from 'react'

interface Pokemon {
  id: number;
  name: string;
  details: {
    sprites: {
      front_default: string;
    };
  };
  link: string,
}

interface Props {
  lista: Pokemon[];
}


export default function Card({ lista }: Props) {
  return (
    <>
      {lista.map((pokemon: any) => {
        return (
          <li key={pokemon.id}>
            <p>
              {pokemon.name}
            </p>
            <Image 
              src={pokemon.details.sprites.front_default}
              width={75}
              height={90}
              alt={`Foto do pokemon ${pokemon.name}`}
            />
            <Link 
              href='#'
              textAnchor='Veja mais detalhes'
            />
          </li>
        )
      })}
    </>
  )
}
