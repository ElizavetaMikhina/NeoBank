import React from 'react'

type FeatureItemProps = {
  imgSrc: string
  text: string
}

const FeatureItem: React.FC<FeatureItemProps> = ({ imgSrc, text }) => {
  return (
    <li className="features__item">
      <img src={imgSrc} alt="Feature icon" className="features__item-img" />
      {text}
    </li>
  )
}

export default FeatureItem
