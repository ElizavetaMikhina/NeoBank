import { useFetchNews } from '@hooks/useFetchNews'
import { NewsCard } from './NewsCard'
import { useRef } from 'react'
import { ButtonControls } from '@components/ui/ButtonControls'
import { ErrorLoadingLayout } from '@components/common/ErrorLoadingLayout/ErrorLoadingLayout'

export const NewsFeed = () => {
  const { news, loading, error } = useFetchNews()
  const sliderRef = useRef<HTMLDivElement>(null)

  return (
    <section className="news-feed">
      <h2 className="news-feed__title">
        Current news from the world of finance
      </h2>
      <ErrorLoadingLayout isError={!!error} loading={loading}>
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
      </ErrorLoadingLayout>
    </section>
  )
}
