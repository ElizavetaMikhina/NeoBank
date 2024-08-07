import React from 'react'
import styles from './StepsMessage.module.scss'

type StepsMessageProps = {
  data: {
    title: string
    description: string
  }
}

export const StepsMessage: React.FC<StepsMessageProps> = ({
  data: { title, description }
}) => {
  return (
    <section className={styles.message}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </section>
  )
}
