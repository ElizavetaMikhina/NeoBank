import React from 'react'

type FaqItemProps = {
  question: string
  answer: string
  className?: string
  onClick: () => void
  isActive: boolean
}

export const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  className,
  onClick,
  isActive
}) => {
  return (
    <li className={`${className}__item`} onClick={onClick}>
      <div className={`${className}__item-content`}>
        <p className={`${className}__item-question`}>{question}</p>
        <img
          className={`${className}__item-arrow ${isActive ? `${className}__item-arrow--active` : ''}`}
          src="/images/icons/loan/accordion-arrow.svg"
          alt="arrow"
        />
      </div>

      <p
        className={`${className}__item-answer ${isActive ? `${className}__item-answer--active` : ''}`}>
        {answer.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </li>
  )
}
