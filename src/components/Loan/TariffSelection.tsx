import React, { useState } from 'react'
import { Prescoring } from './Prescoring'
import { tariffs } from 'data/tariffsData'
import { TariffCard } from './TariffCard'

export const TariffSelection: React.FC = () => {
  const [showPrescoring, setShowPrescoring] = useState(false)

  const handleSelectClick = () => {
    setShowPrescoring(true)
  }

  return (
    <>
      {showPrescoring ? (
        <Prescoring />
      ) : (
        <section id="tariff-selection" className="tariff-selection">
          {tariffs.map(
            ({
              id,
              requestedAmount,
              totalAmount,
              term,
              monthlyPayment,
              rate,
              insuranceIncluded,
              salaryClient
            }) => (
              <TariffCard
                key={id}
                requestedAmount={requestedAmount}
                totalAmount={totalAmount}
                term={term}
                monthlyPayment={monthlyPayment}
                rate={rate}
                insuranceIncluded={insuranceIncluded}
                salaryClient={salaryClient}
                onSelect={handleSelectClick}
                className="tariff-card"
              />
            )
          )}
        </section>
      )}
    </>
  )
}
