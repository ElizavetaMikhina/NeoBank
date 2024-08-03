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
  type = 'button',
  disabled = false
}) => {
  return (
    <button
      type={type}
      className={`${className} ${styles.button}`}
      onClick={onClick}
      disabled={disabled}>
      {buttonText}
    </button>
  )
}
