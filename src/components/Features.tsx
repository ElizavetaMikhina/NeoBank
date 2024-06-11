import React from 'react'

const Features = () => {
  return (
    <section className="features">
      <img
        src="images/man.svg"
        alt="the man at the computer"
        className="features__image"
      />
      <div className="features__description">
        <h2 className="features__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="features__text">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="features__items">
          <li className="features__item">
            <img
              src="images/icons/green-check-mark.svg"
              className="features__item-img"></img>
            Powerfull online protection.
          </li>
          <li className="features__item">
            <img
              src="images/icons/green-check-mark.svg"
              className="features__item-img"></img>
            Cashback without borders.
          </li>
          <li className="features__item">
            <img
              src="images/icons/green-check-mark.svg"
              className="features__item-img"></img>
            Personal design
          </li>
          <li className="features__item">
            <img
              src="images/icons/green-check-mark.svg"
              className="features__item-img"></img>
            Work anywhere in the world
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Features
