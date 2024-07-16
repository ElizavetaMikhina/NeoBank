import { useField } from 'formik'
import React from 'react'
import { Label } from './FormLabel/FormLabel'

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
  const [field, { touched, error }] = useField(name)
  const isError = touched && error
  const isValid = touched && !error

  const inputClassName = `${className}__field-input ${isError ? `${className}__field-input--error` : isValid ? `${className}__field-input--success` : ''}`

  return (
    <li className={`${className}__field`}>
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
        className={inputClassName}
      />
      {touched && error ? (
        <div className={`${className}__error`}>{error}</div>
      ) : null}
    </li>
  )
}
