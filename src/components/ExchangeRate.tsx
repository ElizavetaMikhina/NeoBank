import fetchCurrencyRate from '@utils/fetchCurrencyRate'
import React, { useEffect, useState } from 'react'

const currencies = ['USD', 'CNY', 'CHF', 'EUR', 'JPY', 'TRY']

const ExchangeRate = () => {
  const [rates, setRates] = useState<{ [key: string]: number | string }>({})

  useEffect(() => {
    const getRates = async () => {
      const fetchedRates: { [key: string]: number | string } = {}
      for (const currency of currencies) {
        const rate = await fetchCurrencyRate({ fromCurrency: currency })
        if (typeof rate === 'number') {
          fetchedRates[currency] = rate.toFixed(2)
        } else {
          fetchedRates[currency] = 'Ошибка'
        }
      }
      setRates(fetchedRates)
    }
    getRates()
  }, [])

  return (
    <section className="exchange-rate">
      <div className="exchange-rate__main-content">
        <h2 className="exchange-rate__title">Exchange rate in internet bank</h2>
        <p className="exchange-rate__subtitle">Currency</p>
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
      </div>
      <div className="exchange-rate__related-content">
        <p className="exchange-rate__update">
          Update every 15 minutes, MSC 09.08.2022
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

export default ExchangeRate
