import { Button } from '@components/shared/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'
import { CardSelection } from './CardSelection'

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
        <Link to="loan">
          <Button buttonText={'Choose the card'} className="hero__button" />
        </Link>
      </div>
      <CardSelection className="hero" />
    </section>
  )
}
