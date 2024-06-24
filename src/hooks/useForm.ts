import { validateEmail } from '@utils/validation'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useForm = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)

  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed')
    if (subscribed === 'true') {
      setIsSubscribed(true)
    }
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setError(null)
  }

  const subscribeToNewsletter = async () => {
    try {
      const response = await axios.post('http://localhost:3001/subscribers', {
        email
      })
      console.log('Server response:', response.data)
      localStorage.setItem('subscribed', 'true')
      setSubmitted(true)
      setIsSubscribed(true)
      setError(null)
    } catch (error) {
      console.error('Error subscribing:', error)
      setError('Failed to subscribe. Please try again later.')
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email || !validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (isSubscribed) {
      setError("You are already subscribed to the bank's newsletter")
      return
    }

    subscribeToNewsletter()
  }

  const clearError = () => {
    setError(null)
  }

  return {
    email,
    setEmail,
    submitted,
    isSubscribed,
    error,
    handleSubmit,
    handleChange,
    clearError
  }
}
