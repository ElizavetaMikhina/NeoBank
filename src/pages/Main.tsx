import { ExchangeRate } from '@components/ExchangeRate'
import { Features } from '@components/Features/Features'
import { GlobalServices } from '@components/GlobalServices'
import { Hero } from '@components/Hero'
import { NewsFeed } from '@components/NewsFeed/NewsFeed'
import { Subscribe } from '@components/Subscribe'

export const Main = () => {
  return (
    <>
      <Hero />
      <Features />
      <ExchangeRate />
      <GlobalServices />
      <NewsFeed />
      <Subscribe />
    </>
  )
}
