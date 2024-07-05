import React from 'react'
import styles from './AboutCardItem.module.scss'

type AboutCardItemProps = {
  icon?: string
  title: string
  description: string
  className?: string
}

export const AboutCardItem: React.FC<AboutCardItemProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return (
    <li className={`${className}__item ${styles.item}`}>
      <div className={`${className}__item-mobile-wrapper`}>
        {icon && (
          <img src={icon} alt="" className={`${className}__item-icon`} />
        )}
        <h3 className={`${className}__item-title`}>{title}</h3>
      </div>
      <p className={`${className}__item-description`}>{description}</p>
    </li>
  )
}
