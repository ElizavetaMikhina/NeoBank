import React from 'react'
type TCardsSelectionsProps = {
  className?: string
}

const CardSelection: React.FC<TCardsSelectionsProps> = ({ className }) => {
  const cards = [
    { src: 'images/bank-card-design-1.png', alt: 'Card 1' },
    { src: 'images/bank-card-design-2.png', alt: 'Card 2' },
    { src: 'images/bank-card-design-3.png', alt: 'Card 3' },
    { src: 'images/bank-card-design-4.png', alt: 'Card 4' }
  ]

  return (
    <ul className={`${className}__cards`}>
      {cards.map((card, index) => (
        <li key={index} className={`${className}__card`}>
          <img
            className={`${className}__card-img`}
            src={card.src}
            alt={card.alt}
          />
        </li>
      ))}
    </ul>
  )
}

export default CardSelection
