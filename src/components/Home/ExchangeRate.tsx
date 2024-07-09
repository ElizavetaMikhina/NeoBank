import { ErrorLoadingLayout } from '@components/common/ErrorLoadingLayout/ErrorLoadingLayout'
import { useFetchRates } from '@hooks/useFetchRates'
import { currencies } from 'data/commonData'
import React from 'react'
import { Rates } from 'types/Rates'

type FetchRatesResult = {
  rates: Rates
  error: string | null
  loading: boolean
}

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()
  return `${day}.${month}.${year}`
}

export const ExchangeRate: React.FC = () => {
  const { rates, error, loading }: FetchRatesResult = useFetchRates(currencies)

  const currentDate = new Date()
  const formattedDate = formatDate(currentDate)

  return (
    <section className="exchange-rate">
      <div className="exchange-rate__main-content">
        <h2 className="exchange-rate__title">Exchange rate in internet bank</h2>
        <p className="exchange-rate__subtitle">Currency</p>
        <ErrorLoadingLayout isError={!!error} loading={loading}>
          <div className="exchange-rate__currency-converter">
            <ul className="exchange-rate__currencies">
              {currencies.map((currency) => (
                <li key={currency} className="exchange-rate__currency">
                  <p className="exchange-rate__currency-name">{currency}:</p>
                  <p className="exchange-rate__currency-value">
                    {rates[currency]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <p className="exchange-rate__all-courses">All courses</p>
        </ErrorLoadingLayout>
      </div>
      <div className="exchange-rate__related-content">
        <p className="exchange-rate__update">
          Update every 15 minutes, MSC {formattedDate}
        </p>
        <img
          src="images/icons/bank.svg"
          alt="Банк"
          className="exchange-rate__image"
        />
      </div>
    </section>
  )
}
