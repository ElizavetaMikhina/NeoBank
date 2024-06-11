import React from 'react'

type TLogoProps = {
  className?: string
}

const Logo: React.FC<TLogoProps> = ({ className }) => {
  return <div className={`${className}`}>NeoBank</div>
}

export default Logo
