import React from 'react'
import { FeatureItem } from './FeatureItem'
import { FeatureListProps } from 'types/types'

export const FeatureList: React.FC<FeatureListProps> = ({ imgSrc, items }) => {
  return (
    <ul className="features__items">
      {items.map(({ text }, index) => (
        <FeatureItem key={index} imgSrc={imgSrc} text={text} />
      ))}
    </ul>
  )
}
