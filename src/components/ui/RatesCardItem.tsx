import React from 'react'

type RatesCardItemProps = {
  title: string
  description: string
  className?: string
}

export const RatesCardItem: React.FC<RatesCardItemProps> = ({
  title,
  description,
  className
}) => {
  return (
    <li className={`${className}__item`}>
      <p className={`${className}__item-title`}>{title}</p>
      <p className={`${className}__item-description`}>
        {description.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </li>
  )
}
