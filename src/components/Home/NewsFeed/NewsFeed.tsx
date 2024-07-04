import { useFetchNews } from '@hooks/useFetchNews'
import { NewsCard } from './NewsCard'
import { ErrorLayout } from '@components/common/ErrorLayout'
import { useRef } from 'react'
import { ButtonControls } from '@components/ui/ButtonControls'

export const NewsFeed = () => {
  const { news, loading, error } = useFetchNews()
  const sliderRef = useRef<HTMLDivElement>(null)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <ErrorLayout isError={!!error}>
      <section className="news-feed">
        <h2 className="news-feed__title">
          Current news from the world of finance
        </h2>
        <p className="news-feed__description">
          We update the news feed every 15 minutes. You can learn more by
          clicking on the news you are interested in.
        </p>
        <div className="news-feed__slider" ref={sliderRef}>
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
        <div className="news-feed__button-wrapper">
          <ButtonControls sliderRef={sliderRef} className="news-feed" />
        </div>
      </section>
    </ErrorLayout>
  )
}
