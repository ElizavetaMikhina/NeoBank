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
  toCurrency = 'RUB',
  amount = '1.0'
}: FetchCurrencyRateParams): Promise<FetchCurrencyRateResponse> => {
  try {
    const response = await axios.get(CURRENCY_API_URL, {
      params: { to: toCurrency, from: fromCurrency, q: amount },
      headers: {
        'x-rapidapi-key': CURRENCY_API_KEY,
        'x-rapidapi-host': CURRENCY_API_HOST
      }
    })
    return response.data
  } catch (error) {
    console.error(
      `Ошибка при получении курса ${fromCurrency}: ${(error as Error).message}`
    )
    return {
      error: `Не удалось получить курс валют: ${(error as Error).message}`
    }
  }
}
