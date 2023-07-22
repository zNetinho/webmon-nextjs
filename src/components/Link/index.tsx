import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types';
import { ILink } from '@/data/@types/Components/ILink';
export default function Link({href, textAnchor, styleClass,}: ILink) {
  return (
    <NextLink 
      href={href}
      className={styleClass}
    >
      {textAnchor}
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  textAnchor: PropTypes.elementType.isRequired
}
