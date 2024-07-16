import React from 'react'

type CardInfoItemProps = {
  title: string
  description: string
  tooltip: string
  className?: string
}

export const CardInfoItem: React.FC<CardInfoItemProps> = ({
  title,
  description,
  tooltip,
  className
}) => {
  return (
    <li className={`${className}__info-item`} aria-describedby="tooltip-text">
      <p className={`${className}__info-item-title`}>{title}</p>
      <div className={`${className}__info-item-tooltip`}>{tooltip}</div>
      <p className={`${className}__info-item-description`}>{description}</p>
    </li>
  )
}
