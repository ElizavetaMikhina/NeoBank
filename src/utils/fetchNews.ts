import axios from 'axios'
import { CACHE_KEY, NEWS_API_KEY, NEWS_API_URL } from '../constants'
import { ApiNewsArticle, FetchNewsArticleParams } from 'types/types'

export const fetchNews = async (
  pageSize: number = 40
): Promise<FetchNewsArticleParams[]> => {
  try {
    let cachedArticles = sessionStorage.getItem(CACHE_KEY)

    if (cachedArticles) {
      console.log('Fetching news from cache...')
      return JSON.parse(cachedArticles)
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

    sessionStorage.setItem(CACHE_KEY, JSON.stringify(filteredArticles))

    return filteredArticles
  } catch (error) {
    console.error('Error fetching news:', error)
    throw new Error('Failed to fetch news')
  }
}
