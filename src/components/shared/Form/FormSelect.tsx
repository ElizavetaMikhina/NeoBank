import React from 'react'
import { useField } from 'formik'
import { Label } from './FormLabel/FormLabel'

type Option = {
  value: string | number
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
    <li className={`${className}__field`}>
      <Label
        htmlFor={id}
        text={label}
        required={required}
        className={`${className}__field-label`}
      />
      <select id={id} {...field} className={`${className}__field-select`}>
        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
            className={`${className}__field-option`}>
            {label}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className={`${className}__error`}>{meta.error}</div>
      ) : null}
    </li>
  )
}
