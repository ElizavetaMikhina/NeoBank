import { Spinner } from '@components/shared/Spinner/Spinner'
import React, { ReactNode } from 'react'
import styles from './ErrorLoadingLayout.module.scss'

export type TErrorLayoutProps = {
  isError?: boolean
  children: ReactNode
  loading?: boolean
}

const Error: React.FC = () => (
  <div className={styles.error}>
    <p>
      Service is temporarily unavailable. We are working to resolve the issue.
      Thank you for your patience!
    </p>
  </div>
)

const LoadingSpinner: React.FC = () => (
  <div className={styles.loading}>
    <Spinner />
  </div>
)

export const ErrorLoadingLayout: React.FC<TErrorLayoutProps> = ({
  isError,
  loading,
  children
}) => {
  if (loading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <Error />
  }

  return <>{children}</>
}
