import { Button } from '@components/shared/Button/Button'
import { CardInfoItem } from '@components/shared/CardInfoItem'
import axios from 'axios'
import { cardInfoData } from 'data/cardInfoData'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setApplicationId, setCurrentStep } from 'store/slices/applicationSlice'
import { RootState } from 'store/store'

export const CardInfo: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isTariffSelected, applicationId } = useSelector(
    (state: RootState) => state.application
  )
  const [shouldNavigate, setShouldNavigate] = useState(false)

  useEffect(() => {
    const fetchApplicationData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/admin/application'
        )
        if (response.data.length > 0) {
          const firstApplication = response.data[0]
          const id = firstApplication.id
          dispatch(setApplicationId(id))

          if (id) {
            const statusResponse = await axios.get(
              `http://localhost:8080/admin/application/${id}`
            )
            const status = statusResponse.data.status
            if (status === 'APPROVED') {
              dispatch(setCurrentStep(2))
            }
          }
        }
      } catch (error) {
        console.error('Error fetching application data:', error)
      }
    }

    fetchApplicationData()
  }, [dispatch])

  useEffect(() => {
    if (shouldNavigate && applicationId) {
      navigate(`/loan/${applicationId}`)
    }
  }, [shouldNavigate, applicationId, navigate])

  const buttonscrollTo = () => {
    const prescoring = document.getElementById('prescoring')
    if (prescoring) {
      const yOffset = prescoring.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }

  const buttonText = isTariffSelected
    ? 'Continue registration'
    : 'Apply for card'

  const handleButtonClick = () => {
    if (isTariffSelected) {
      if (applicationId) {
        dispatch(setCurrentStep(2))
        setShouldNavigate(true)
      } else {
        console.error('applicationId не найден при попытке навигации.')
      }
    } else {
      buttonscrollTo()
    }
  }

  return (
    <section className="credit-card" id="card-info">
      <div className="credit-card__info-wrapper">
        <h1 className="credit-card__title">Platinum digital credit card</h1>
        <p className="credit-card__description">
          Our best credit card. Suitable for everyday spending and shopping.
          <br />
          Cash withdrawals and transfers without commission and interest.
        </p>
        <ul className="credit-card__info-items">
          {cardInfoData.map(({ title, description, tooltip }, index) => (
            <CardInfoItem
              key={index}
              title={title}
              description={description}
              tooltip={tooltip}
              className="credit-card"
            />
          ))}
        </ul>
        <Button
          buttonText={buttonText}
          className="credit-card__button"
          onClick={handleButtonClick}></Button>
      </div>

      <img
        src="/images/bank-card-design-1-rotate.png"
        alt="Credit card"
        className="credit-card__image"
      />
    </section>
  )
}
