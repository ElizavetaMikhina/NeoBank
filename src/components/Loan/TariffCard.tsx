import { Button } from '@components/ui/Button/Button'
import React from 'react'

type TariffCardProps = {
  requestedAmount: string
  totalAmount: string
  term: string
  monthlyPayment: string
  rate: string
  insuranceIncluded: boolean
  salaryClient: boolean
  onSelect: () => void
  className?: string
}

export const TariffCard: React.FC<TariffCardProps> = ({
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
        onClick={onSelect}
        buttonText="Select"
        className={`${className}__button`}
      />
    </div>
  )
}
