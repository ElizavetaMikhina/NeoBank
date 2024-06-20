import React, { ReactNode } from 'react'

// For COMPONENTS
// ErrorLayout.tsx
export type ErrorLayoutProps = {
  isError: boolean
  children: ReactNode
}

// Features
export type FeatureItemProps = {
  imgSrc?: string
  text: string
}

export type FeatureListProps = {
  imgSrc: string
  items: FeatureItemProps[]
}

// NewsFeed
export type NewsCardProps = {
  article: {
    urlToImage: string
    title: string
    url: string
    description: string
  }
}

// CardSelection.tsx
export type TCardsSelectionsProps = {
  className?: string
}

// ExchangeRate.tsx
export type Rates = { [key: string]: number | string }

export type FetchRatesResult = {
  rates: Rates
  error: string | null
}

// Hero.tsx
export type THeroProps = {
  className?: string
}

// For UI COMPONENTS
export type TButtonProps = {
  buttonText: string
  className?: string
}

export type ButtonControlsProps = {
  className?: string
  sliderRef: React.RefObject<HTMLDivElement>
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  maxIndex: number
}

export type TLogoProps = {
  className?: string
}

export type TNavigationProps = {
  items: { href: string; label: string }[]
  className?: string
}

export type TNavItemProps = {
  href: string
  label: string
  className?: string
}

// For HOOKS
// useFetchNews.ts
export type NewsArticle = {
  urlToImage: string
  title: string
  url: string
  description: string
}

// For UTILS
// fetchCurrencyRate.ts
export type FetchCurrencyRateParams = {
  fromCurrency: string
  toCurrency?: string
  amount?: string
}

export type FetchCurrencyRateResponse = number | { error: string }

// fetchNews.ts
export type ApiNewsArticle = {
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

export type FetchNewsArticleParams = {
  urlToImage: string
  title: string
  url: string
  description: string
}
