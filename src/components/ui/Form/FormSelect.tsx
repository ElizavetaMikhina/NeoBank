import { useField } from 'formik'
import React from 'react'
import { Label } from './FormLabel'

type Option = {
  value: string
  label: string
}

type FormSelectProps = {
  id: string
  name: string
  label: string
  options: Option[]
  className?: string
  required?: boolean
}

export const FormSelect: React.FC<FormSelectProps> = ({
  id,
  name,
  label,
  options,
  className,
  required
}) => {
  const [field, meta] = useField(name)

  return (
    <div className={`${className}__field`}>
      <Label
        htmlFor={id}
        text={label}
        required={required}
        className={`${className}__field-label`}
      />
      <select id={id} {...field} className={`${className}__field-select`}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={`${className}__field-option`}>
            {option.label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className={`${className}__error`}>{meta.error}</div>
      ) : null}
    </div>
  )
}
