import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types';

interface Props {
  href: string,
  textAnchor: string,
  styleClass?: string,
}

export default function Link({href, textAnchor, styleClass,}: Props) {
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
