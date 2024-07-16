import { validateEmail } from '@utils/validateEmail'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {
  activateMockEmailServer,
  deactivateMockEmailServer
} from '../mocks/mockServer'

export const useForm = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

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
    activateMockEmailServer()
    setLoading(true)
    try {
      const response = await axios.post('/email', { email })
      console.log('Server response:', response.data)
      localStorage.setItem('subscribed', 'true')
      setSubmitted(true)
      setIsSubscribed(true)
      setError(null)
    } catch (error) {
      console.error('Error subscribing:', error)
      setError('Failed to subscribe. Please try again later.')
    } finally {
      setLoading(false)
      deactivateMockEmailServer()
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
    loading,
    handleSubmit,
    handleChange,
    clearError
  }
}
