import { useField } from 'formik'
import React from 'react'
import { Label } from './FormLabel'

type FormInputProps = {
  id: string
  name: string
  label: string
  type: string
  placeholder?: string
  className?: string
  required?: boolean
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type,
  placeholder,
  className,
  required
}) => {
  const [field, meta] = useField(name)
  const isError = meta.touched && meta.error
  const isValid = meta.touched && !meta.error

  return (
    <div className={`${className}__field`}>
      <Label
        htmlFor={id}
        text={label}
        required={required}
        className={`${className}__field-label`}
      />
      <input
        id={id}
        {...field}
        type={type}
        placeholder={placeholder}
        className={`${className}__field-input ${isError ? `${className}__field-input--error` : isValid ? `${className}__field-input--success` : ''}`}
      />
      {meta.touched && meta.error ? (
        <div className={`${className}__error`}>{meta.error}</div>
      ) : null}
    </div>
  )
}
