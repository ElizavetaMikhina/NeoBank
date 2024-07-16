import { Button } from '@components/shared/Button/Button'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  return (
    <section className="not-found">
      <div className="not-found__text-content">
        <h1 className="not-found__title">Oops....</h1>
        <h2 className="not-found__subtitle">Page not found</h2>
        <p className="not-found__description">
          This Page doesn`t exist or was removed! We suggest you go back.
        </p>
        <Button
          className="not-found__button"
          buttonText="Go back"
          onClick={goBack}
        />
      </div>
      <div className="not-found__image-wrapper">
        <img
          src="/images/404_Error.png"
          alt="Error"
          className="not-found__image"
        />
      </div>
    </section>
  )
}
