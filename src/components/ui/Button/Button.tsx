import React from 'react'
import styles from './Button.module.scss'

type TButtonProps = {
  buttonText: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<TButtonProps> = ({
  buttonText,
  className,
  onClick,
  type
}) => {
  return (
    <button
      type={type}
      className={`${className} ${styles.botton}`}
      onClick={onClick}>
      {buttonText}
    </button>
  )
}
