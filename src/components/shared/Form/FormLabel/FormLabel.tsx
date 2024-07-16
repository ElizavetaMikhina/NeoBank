import React from 'react'
import styles from './FormLabel.module.scss'

type LabelProps = {
  htmlFor: string
  text: string
  required?: boolean
  className?: string
}

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  text,
  required,
  className
}) => {
  return (
    <label htmlFor={htmlFor} className={`${className} ${styles.label}`}>
      {text}
      {required && <span className={`${styles.required}`}> *</span>}
    </label>
  )
}
