import React from 'react'
import FeatureItem from './FeatureItem'

type FeatureItemProps = {
  text: string
}

type FeatureListProps = {
  imgSrc: string
  items: FeatureItemProps[]
}

const FeatureList: React.FC<FeatureListProps> = ({ imgSrc, items }) => {
  return (
    <ul className="features__items">
      {items.map((item, index) => (
        <FeatureItem key={index} imgSrc={imgSrc} text={item.text} />
      ))}
    </ul>
  )
}

export default FeatureList
