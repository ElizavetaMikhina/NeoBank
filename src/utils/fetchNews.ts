import axios from 'axios'
import { CACHE_KEY, NEWS_API_KEY, NEWS_API_URL } from '../constants'
import { TFetchNewsArticleParams } from 'types/FetchNewsArticleParams'

type ApiNewsArticle = {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

const CACHE_EXPIRATION_TIME = 15 * 60 * 1000

const isValidImageUrl = (url: string | null): boolean => {
  if (!url) return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export const fetchNews = async (
  pageSize: number = 40
): Promise<TFetchNewsArticleParams[]> => {
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

    const filteredArticles: TFetchNewsArticleParams[] =
      response.data.articles.filter(
        (article: ApiNewsArticle) =>
          article.urlToImage &&
          article.description &&
          !article.description.includes('<') &&
          isValidImageUrl(article.urlToImage)
      )

    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        articles: filteredArticles,
        timestamp: Date.now()
      })
    )

    return filteredArticles.slice(0, pageSize)
  } catch (error) {
    console.error('Error fetching news:', error)
    throw new Error('Failed to fetch news')
  }
}
