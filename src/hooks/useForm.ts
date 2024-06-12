import { validateEmail } from '@utils/validation'
import React, { useState } from 'react'

export const useForm = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }
    setSubmitted(true)
    setError(null)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setError(null)
  }

  const clearError = () => {
    setError(null)
  }

  return {
    email,
    setEmail,
    submitted,
    error,
    handleSubmit,
    handleChange,
    clearError
  }
}
