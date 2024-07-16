import React from 'react'
import styles from './Button.module.scss'
import { ButtonType } from 'types/types'

type TButtonProps = {
  buttonText: string
  className?: string
  disabled?: boolean
  onClick?: () => void
  type?: ButtonType
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
