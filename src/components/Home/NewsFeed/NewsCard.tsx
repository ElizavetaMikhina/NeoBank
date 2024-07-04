import React from 'react'

type NewsCardProps = {
  article: {
    urlToImage: string
    title: string
    url: string
    description: string
  }
}

export const NewsCard: React.FC<NewsCardProps> = ({ article }) => {
  const { url, urlToImage, title, description } = article

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="news-feed__slide">
      <img src={urlToImage} alt={title} className="news-feed__slide-image" />
      <div className="news-feed__slide-text-content">
        <h3 className="news-feed__slide-title">{title}</h3>
        <p className="news-feed__slide-description">{description}</p>
      </div>
    </a>
  )
}
