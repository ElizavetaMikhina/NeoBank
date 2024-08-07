import React from 'react'
import styles from './Checkbox.module.scss'

type CheckboxProps = {
  label: string
  checked: boolean
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void
  className?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  className
}) => {
  return (
    <label className={`${className}__checkbox-label ${styles.label}`}>
      <input
        type="checkbox"
        className={`${className}__checkbox-input ${styles.input}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  )
}
