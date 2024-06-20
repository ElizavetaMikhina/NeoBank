import React from 'react'
import styles from './Button.module.scss'
import { TButtonProps } from 'types/types'

export const Button: React.FC<TButtonProps> = ({ buttonText, className }) => {
  return (
    <button className={`${className} ${styles.botton}`}>{buttonText}</button>
  )
}
