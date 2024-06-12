import React from 'react'
import { Link } from 'react-router-dom'

type TLogoProps = {
  className?: string
}

const Logo: React.FC<TLogoProps> = ({ className }) => {
  return (
    <Link to="/" className={`${className}`}>
      NeoBank
    </Link>
  )
}

export default Logo
