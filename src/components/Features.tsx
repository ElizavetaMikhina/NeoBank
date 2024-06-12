import React from 'react'
import FeatureList from './FeatureList'

const featureItems = [
  {
    text: 'Powerful online protection'
  },
  {
    text: 'Cashback without borders'
  },
  {
    text: 'Personal design'
  },
  {
    text: 'Work anywhere in the world'
  }
]

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
        <FeatureList
          imgSrc="images/icons/green-check-mark.svg"
          items={featureItems}
        />
      </div>
    </section>
  )
}

export default Features
