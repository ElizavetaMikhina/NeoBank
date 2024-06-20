import React from 'react'
import { FeatureItemProps } from 'types/types'

export const FeatureItem: React.FC<FeatureItemProps> = ({ imgSrc, text }) => {
  return (
    <li className="features__item">
      <img src={imgSrc} alt="Feature icon" className="features__item-img" />
      {text}
    </li>
  )
}
