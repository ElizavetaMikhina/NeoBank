import React from 'react'
import styles from './Button.module.scss'

type TButtonProps = {
  buttonText: string
  className?: string
}

const Button: React.FC<TButtonProps> = ({ buttonText, className }) => {
  return (
    <button className={`${className} ${styles.botton}`}>{buttonText}</button>
  )
}

export default Button
