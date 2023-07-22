import React from 'react'
import fire from 'public/icons/fire.svg'
import ImageComponent from '../ImageComponent'
import iconsMap from './iconsMap'

export default function IconType({ type }: any) {
  const iconPath = iconsMap[type];

  if(!type) {
    return (
      <>
        <ImageComponent alt='Icone' height={40} src='public/icons/default.png' width={40}/>
      </>
    )
  }

  return (
    <>
      <ImageComponent alt='Icone' height={40} src={iconPath} width={40}/>
    </>
  )
}
