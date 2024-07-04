import React from 'react'

export const Steps: React.FC = () => {
  return (
    <section className="steps">
      <h1 className="steps__title">How to get a card</h1>
      <ul className="steps__items">
        <li className="steps__item">
          <div className="steps__item-decorate">
            <div className="steps__item-number">1</div>
          </div>
          <p className="steps__item-text-content">
            Fill out an online application - you do not need to visit the bank
          </p>
        </li>

        <li className="steps__item">
          <div className="steps__item-decorate">
            <div className="steps__item-number">2</div>
          </div>
          <p className="steps__item-text-content">
            Find out the bank&apos;s decision immediately after filling out the
            application
          </p>
        </li>

        <li className="steps__item">
          <div className="steps__item-decorate">
            <div className="steps__item-number">3</div>
          </div>
          <p className="steps__item-text-content">
            The bank will deliver the card free of charge, wherever convenient,
            to your city
          </p>
        </li>
      </ul>
    </section>
  )
}
