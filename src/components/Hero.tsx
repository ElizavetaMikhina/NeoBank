import { CardSelection } from '@components/CardSelection'
import { Button } from '@components/ui/Button/Button'
import React from 'react'

type THeroProps = {
  className?: string
}

export const Hero: React.FC<THeroProps> = () => {
  return (
    <section className="hero">
      <div className="hero__description">
        <h1 className="hero__title">
          Choose the design you like and apply for card right now
        </h1>
        <Button buttonText={'Choose the card'} className="hero__button" />
      </div>
      <CardSelection className="hero" />
    </section>
  )
}
