import React from 'react'
import styles from './Spinner.module.scss'

type TSpinnerProps = {
  className?: string
}

export const Spinner: React.FC<TSpinnerProps> = ({ className }) => {
  return (
    <div className={`${className}__spinner ${styles.spinner}`}>
      <div className={styles.spinnerInner}></div>
    </div>
  )
}
