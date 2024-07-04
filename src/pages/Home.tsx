import { ExchangeRate } from '@components/Home/ExchangeRate'
import { Features } from '@components/Home/Features/Features'
import { GlobalServices } from '@components/Home/GlobalServices'
import { Hero } from '@components/Home/Hero'
import { NewsFeed } from '@components/Home/NewsFeed/NewsFeed'
import { Subscribe } from '@components/Home/Subscribe'

export const Home = () => {
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
