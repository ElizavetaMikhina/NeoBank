import React from 'react'

type MessageProps = {
  data: {
    title: string
    description: string
  }
}

export const Message: React.FC<MessageProps> = ({
  data: { title, description }
}) => {
  return (
    <section className="message">
      <h3 className="message__title">{title}</h3>
      <p className="message__description">{description}</p>
    </section>
  )
}
