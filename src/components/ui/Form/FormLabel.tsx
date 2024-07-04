import React from 'react'

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
    <label htmlFor={htmlFor} className={className}>
      {text}
      {required && <span className={`${className}--required`}> *</span>}
    </label>
  )
}
