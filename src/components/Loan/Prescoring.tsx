import React, { useEffect, useState } from 'react'
import { PrescoringForm } from './PrescoringForm/PrescoringForm'
import { TariffSelection } from './TariffSelection'
import { useDispatch, useSelector } from 'react-redux'
import {
  initializeApplicationState,
  setTariffSelected
} from 'store/slices/applicationSlice'
import { setTopFourTariffs } from 'store/slices/tariffsSlice'
import { RootState } from 'store/store'

export const Prescoring: React.FC = () => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState<number>(150000)
  const { isTariffSelected } = useSelector(
    (state: RootState) => state.application
  )

  useEffect(() => {
    dispatch(initializeApplicationState())
  }, [dispatch])

  useEffect(() => {
    const storedTariffs = localStorage.getItem('topFourTariffs')
    if (storedTariffs) {
      dispatch(setTopFourTariffs(JSON.parse(storedTariffs)))
    }
  }, [dispatch])

  if (isTariffSelected) {
    return <TariffSelection />
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseInt(e.target.value, 10)
    if (!isNaN(newAmount) && newAmount >= 15000 && newAmount <= 600000) {
      setAmount(newAmount)
    }
  }

  return (
    <section id="prescoring" className="prescoring">
      <div className="prescoring__main">
        <div className="prescoring__content">
          <div className="prescoring__header">
            <h2 className="prescoring__title">Customize your card</h2>
            <p className="prescoring__step">Step 1 of 5</p>
          </div>

          <div className="prescoring__amount">
            <label htmlFor="amount" className="prescoring__amount-label">
              Select amount
            </label>
            <p className="prescoring__amount-value">
              {amount.toLocaleString()}
            </p>
            <input
              type="range"
              id="amount"
              name="amount"
              min="15000"
              max="600000"
              value={amount}
              onChange={handleAmountChange}
              className="prescoring__amount-input"
              style={{ '--amount': amount } as React.CSSProperties}
            />
            <div className="prescoring__amount-range-values">
              <p>15 000</p>
              <p>600 000</p>
            </div>
          </div>
        </div>

        <div className="prescoring__chosen-amount">
          <h3 className="prescoring__chosen-amount-title">
            You have chosen this amount
          </h3>
          <p className="prescoring__chosen-amount-value">
            {amount.toLocaleString()} ₽
          </p>
        </div>
      </div>

      <PrescoringForm
        amount={amount}
        setIsSubmitted={(submitted: boolean) => {
          if (submitted) {
            dispatch(setTariffSelected(true))
          }
        }}
      />
    </section>
  )
}
