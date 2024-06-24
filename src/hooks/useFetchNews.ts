import { fetchNews } from '@utils/fetchNews'
import { useEffect, useState } from 'react'

type NewsArticle = {
  urlToImage: string
  title: string
  url: string
  description: string
}

export const useFetchNews = (pageSize?: number) => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTopBusinessNews = async () => {
      try {
        const data = await fetchNews(pageSize)
        setNews(data)
        setLoading(false)
      } catch (error) {
        setError('Failed to fetch news')
        setLoading(false)
      }
    }

    fetchTopBusinessNews()

    const intervalId = setInterval(
      () => {
        fetchTopBusinessNews()
      },
      15 * 60 * 1000
    )

    return () => clearInterval(intervalId)
  }, [pageSize])

  return { news, loading, error }
}
