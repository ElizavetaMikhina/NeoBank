import { useFetchRates } from '@hooks/useFetchRates'

const currencies = ['USD', 'CNY', 'CHF', 'EUR', 'JPY', 'TRY']

const ExchangeRate = () => {
  const { rates, error } = useFetchRates(currencies)

  if (error) {
    return <div className="exchange-rate__error">{error}</div>
  }

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
