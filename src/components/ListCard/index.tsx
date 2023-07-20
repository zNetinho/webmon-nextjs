import React from 'react'
import Card from './Card'
import PropTypes from 'prop-types';
import Props from '../../data/@types/IPokemon'


export default function ListaCard({lista}: Props) {
  return (
    <ul className='flex flex-wrap gap-10 w-4/5 mx-auto'>
       <Card
          lista={lista}
       /> 
    </ul>
  )
}

ListaCard.propTypes = {
  lista: PropTypes.array.isRequired,
}
