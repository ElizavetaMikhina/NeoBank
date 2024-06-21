import axios from 'axios'
import { CACHE_KEY, NEWS_API_KEY, NEWS_API_URL } from '../constants'
import { ApiNewsArticle, FetchNewsArticleParams } from 'types/types'

const CACHE_EXPIRATION_TIME = 15 * 60 * 1000

export const fetchNews = async (
  pageSize: number = 40
): Promise<FetchNewsArticleParams[]> => {
  try {
    const cachedData = sessionStorage.getItem(CACHE_KEY)

    if (cachedData) {
      const { articles, timestamp } = JSON.parse(cachedData)
      const timeElapsed = Date.now() - timestamp

      if (timeElapsed < CACHE_EXPIRATION_TIME) {
        console.log('Fetching news from cache...')
        return articles
      }
    }

    console.log('Fetching news from API...')
    const response = await axios.get(NEWS_API_URL, {
      params: {
        country: 'us',
        category: 'business',
        pageSize: pageSize,
        apiKey: NEWS_API_KEY
      }
    })

    const isValidUrl = (url: string) => {
      try {
        new URL(url)
        return true
      } catch {
        return false
      }
    }

    const filteredArticles: FetchNewsArticleParams[] = response.data.articles
      .filter(
        (article: ApiNewsArticle) =>
          article.urlToImage &&
          article.description &&
          !article.description.includes('<') &&
          isValidUrl(article.urlToImage)
      )
      .slice(0, pageSize)

    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        articles: filteredArticles,
        timestamp: Date.now()
      })
    )

    return filteredArticles
  } catch (error) {
    console.error('Error fetching news:', error)
    throw new Error('Failed to fetch news')
  }
}
