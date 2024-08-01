import { Button } from '@components/shared/Button/Button'
import React from 'react'

type TariffCardProps = {
  id: number
  requestedAmount: string
  totalAmount: string
  term: string
  monthlyPayment: string
  rate: string
  insuranceIncluded: boolean
  salaryClient: boolean
  // eslint-disable-next-line no-unused-vars
  onSelect: (id: number) => void
  className?: string
}

export const TariffCard: React.FC<TariffCardProps> = ({
  id,
  requestedAmount,
  totalAmount,
  term,
  monthlyPayment,
  rate,
  insuranceIncluded,
  salaryClient,
  onSelect,
  className
}) => {
  return (
    <div className={`${className}`}>
      <img
        src="/images/SurpriseImage.png"
        alt="Card Image"
        className={`${className}__image`}
      />
      <div className={`${className}__details`}>
        <li className={`${className}__detail`}>
          Requested amount: {requestedAmount}
        </li>
        <li className={`${className}__detail`}>Total amount: {totalAmount}</li>
        <li className={`${className}__detail`}>For {term}</li>
        <li className={`${className}__detail`}>
          Monthly payment: {monthlyPayment}
        </li>
        <li className={`${className}__detail`}>Your rate: {rate}</li>
        <li className={`${className}__detail`}>
          Insurance included
          {insuranceIncluded ? (
            <img
              src="/images/icons/check-mark.svg"
              alt="Card Image"
              className={`${className}__detail-image`}
            />
          ) : (
            <img
              src="/images/icons/cross.svg"
              alt="Card Image"
              className={`${className}__detail-image`}
            />
          )}
        </li>
        <li className={`${className}__detail`}>
          Salary client
          {salaryClient ? (
            <img
              src="/images/icons/check-mark.svg"
              alt="Card Image"
              className={`${className}__detail-image`}
            />
          ) : (
            <img
              src="/images/icons/cross.svg"
              alt="Card Image"
              className={`${className}__detail-image`}
            />
          )}
        </li>
      </div>

      <Button
        onClick={() => onSelect(id)}
        buttonText="Select"
        className={`${className}__button`}
      />
    </div>
  )
}
