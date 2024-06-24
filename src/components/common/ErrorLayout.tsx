import React, { ReactNode } from 'react'

export type TErrorLayoutProps = {
  isError: boolean
  children: ReactNode
}

const TechnicalError: React.FC = () => (
  <div className="error">
    <p>Technical error occurred. Please try again later.</p>
  </div>
)

export const ErrorLayout: React.FC<TErrorLayoutProps> = ({
  isError,
  children
}) => {
  if (isError) {
    return <TechnicalError />
  }

  return <>{children}</>
}
