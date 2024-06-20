import React from 'react'
import { NewsCardProps } from 'types/types'

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-feed__slide">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="news-feed__slide-image"
      />
      <div className="news-feed__slide-text-content">
        <h3 className="news-feed__slide-title">{article.title}</h3>
        <p className="news-feed__slide-description">{article.description}</p>
      </div>
    </a>
  )
}
