import axios from 'axios'
import { API_KEY, API_URL, API_HOST } from '../constants'

type FetchCurrencyRateParams = {
  fromCurrency: string
  toCurrency?: string
  amount?: string
}

type FetchCurrencyRateResponse = number | { error: string }

const fetchCurrencyRate = async ({
  fromCurrency,
  toCurrency = 'RUB',
  amount = '1.0'
}: FetchCurrencyRateParams): Promise<FetchCurrencyRateResponse> => {
  try {
    const response = await axios.get(API_URL, {
      params: { to: toCurrency, from: fromCurrency, q: amount },
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST
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

export default fetchCurrencyRate
