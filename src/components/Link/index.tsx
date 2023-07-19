import React from 'react'
import NextLink from 'next/link'
import PropTypes from 'prop-types';

interface Props {
  href: string,
  textAnchor: string,
}

export default function Link({href, textAnchor}: Props) {
  return (
    <NextLink href={href}>
      {textAnchor}
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  textAnchor: PropTypes.elementType.isRequired
}
