import React from 'react'
import { TFeatureItemProps } from 'types/TFeatureItemProps'

export const FeatureItem: React.FC<TFeatureItemProps> = ({ imgSrc, text }) => {
  return (
    <li className="features__item">
      <img src={imgSrc} alt="Feature icon" className="features__item-img" />
      {text}
    </li>
  )
}
