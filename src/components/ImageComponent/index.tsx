import React from 'react'
import NextImage from 'next/image'
import { ImageComponent } from '@/data/@types/Components/ImageComponents'
import PropTypes from 'prop-types';

export default function ImageComponent({src, alt, width, height}: ImageComponent) {
  return (
    <NextImage 
      src={src}
      alt={alt}
      width={width}
      height={height}
     />
  )
}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}
