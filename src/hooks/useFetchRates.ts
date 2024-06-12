import fetchCurrencyRate from '@utils/fetchCurrencyRate'
import { useCallback, useEffect, useState } from 'react'

type Rates = { [key: string]: number | string }

export const useFetchRates = (currencies: string[]) => {
  const [rates, setRates] = useState<Rates>({})
  const [error, setError] = useState<string | null>(null)

  const cacheKey = 'currencyRates'

  const getRates = useCallback(async () => {
    try {
      const fetchedRates: Rates = {}
      for (const currency of currencies) {
        const rate = await fetchCurrencyRate({ fromCurrency: currency })
        if (typeof rate === 'number') {
          fetchedRates[currency] = rate.toFixed(2)
        } else {
          fetchedRates[currency] = 'Ошибка'
        }
      }
      localStorage.setItem(cacheKey, JSON.stringify(fetchedRates))
      setRates(fetchedRates)
    } catch (err) {
      setError('Failed to fetch currency rates')
    }
  }, [currencies])

  useEffect(() => {
    const cachedRates = localStorage.getItem(cacheKey)
    if (cachedRates) {
      setRates(JSON.parse(cachedRates))
    }

    getRates()

    const intervalId = setInterval(getRates, 15 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [getRates])

  return { rates, error }
}
