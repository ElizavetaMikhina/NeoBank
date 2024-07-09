import axios from 'axios'
import {
  CURRENCY_API_KEY,
  CURRENCY_API_URL,
  CURRENCY_API_HOST
} from '../constants'

type FetchCurrencyRateResponse = number | { error: string }
type FetchCurrencyRateParams = {
  fromCurrency: string
  toCurrency?: string
  amount?: string
}

export const fetchCurrencyRate = async ({
  fromCurrency,
  toCurrency = 'RUB'
}: FetchCurrencyRateParams): Promise<FetchCurrencyRateResponse> => {
  try {
    const options = {
      method: 'GET',
      url: CURRENCY_API_URL,
      params: {
        from: fromCurrency,
        to: toCurrency
      },
      headers: {
        'x-rapidapi-key': CURRENCY_API_KEY,
        'x-rapidapi-host': CURRENCY_API_HOST
      }
    }
    const response = await axios.request(options)

    return response.data.rates[fromCurrency]
  } catch (error) {
    console.error(
      `Ошибка при получении курса ${fromCurrency}: ${(error as Error).message}`
    )
    return {
      error: `Не удалось получить курс валют: ${(error as Error).message}`
    }
  }
}
