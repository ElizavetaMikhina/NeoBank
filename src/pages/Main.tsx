import { ExchangeRate } from '@components/ExchangeRate'
import { Features } from '@components/Features'
import { GlobalServices } from '@components/GlobalServices'
import { Hero } from '@components/Hero'
import { Subscribe } from '@components/Subscribe'

export const Main = () => {
  return (
    <>
      <Hero />
      <Features />
      <ExchangeRate />
      <GlobalServices />
      <Subscribe />
    </>
  )
}
