import React from 'react'
import { ErrorLayoutProps } from 'types/types'

const TechnicalError: React.FC = () => (
  <div className="error">
    <p>Technical error occurred. Please try again later.</p>
  </div>
)

export const ErrorLayout: React.FC<ErrorLayoutProps> = ({
  isError,
  children
}) => {
  if (isError) {
    return <TechnicalError />
  }

  return <>{children}</>
}
