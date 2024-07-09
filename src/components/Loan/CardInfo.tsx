import { Button } from '@components/ui/Button/Button'
import { CardInfoItem } from '@components/ui/CardInfoItem'
import { cardInfoData } from 'data/cardInfoData'
import React from 'react'

export const CardInfo: React.FC = () => {
  const buttonscrollTo = () => {
    const tariffSelection = document.getElementById('tariff-selection')
    if (tariffSelection) {
      const yOffset =
        tariffSelection.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  return (
    <section className="credit-card">
      <div className="credit-card__info-wrapper">
        <h1 className="credit-card__title">Platinum digital credit card</h1>
        <p className="credit-card__description">
          Our best credit card. Suitable for everyday spending and shopping.
          <br />
          Cash withdrawals and transfers without commission and interest.
        </p>
        <ul className="credit-card__info-items">
          {cardInfoData.map(({ title, description, tooltip }, index) => (
            <CardInfoItem
              key={index}
              title={title}
              description={description}
              tooltip={tooltip}
              className="credit-card"
            />
          ))}
        </ul>
        <Button
          buttonText={'Apply for card'}
          className="credit-card__button"
          onClick={buttonscrollTo}></Button>
      </div>

      <img
        src="/images/bank-card-design-1-rotate.png"
        alt="Credit card"
        className="credit-card__image"
      />
    </section>
  )
}
