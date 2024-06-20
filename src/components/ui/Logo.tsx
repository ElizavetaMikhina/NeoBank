import React from 'react'
import { Link } from 'react-router-dom'
import { TLogoProps } from 'types/types'

export const Logo: React.FC<TLogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`${className}`}>
      NeoBank
    </Link>
  )
}
