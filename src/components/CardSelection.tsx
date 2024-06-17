import { cards } from 'constants/cardData'
import React from 'react'
type TCardsSelectionsProps = {
  className?: string
}

export const CardSelection: React.FC<TCardsSelectionsProps> = ({
  className
}) => {
  return (
    <ul className={`${className}__cards`}>
      {cards.map(({ src, alt }, index) => (
        <li key={index} className={`${className}__card`}>
          <img className={`${className}__card-img`} src={src} alt={alt} />
        </li>
      ))}
    </ul>
  )
}
