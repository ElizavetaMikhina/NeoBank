import React from 'react'
import { FeatureItem } from './FeatureItem'
import { TFeatureItemProps } from 'types/TFeatureItemProps'

type TFeatureListProps = {
  imgSrc: string
  items: TFeatureItemProps[]
}

export const FeatureList: React.FC<TFeatureListProps> = ({ imgSrc, items }) => {
  return (
    <ul className="features__items">
      {items.map(({ text }, index) => (
        <FeatureItem key={index} imgSrc={imgSrc} text={text} />
      ))}
    </ul>
  )
}
