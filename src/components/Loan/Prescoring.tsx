import React, { useState } from 'react'
import { PrescoringForm } from './PrescoringForm'

export const Prescoring: React.FC = () => {
  const [amount, setAmount] = useState<number>(150000)

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
              onChange={(e) => setAmount(parseInt(e.target.value))}
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

      <PrescoringForm />
    </section>
  )
}
