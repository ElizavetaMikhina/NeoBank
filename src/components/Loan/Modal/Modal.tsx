/* eslint-disable react/no-unescaped-entities */
import { Button } from '@components/shared/Button/Button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.scss'

type ModalProps = {
  show: boolean
  onClose: () => void
}

export const Modal: React.FC<ModalProps> = ({ show, onClose }) => {
  const [showConfirmation, setShowConfirmation] = useState(true)
  const navigate = useNavigate()

  if (!show) {
    return null
  }

  const handleDeny = () => {
    setShowConfirmation(false)
  }

  const handleGoHome = () => {
    onClose()
    navigate('/')
  }

  const handleCancel = () => {
    onClose()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <img
          className={styles.modal__close}
          onClick={handleCancel}
          src="/images/icons/loan/Close_square.svg"
          alt="Close"
        />
        {showConfirmation ? (
          <>
            <h2 className={styles.modal__title}>Deny application</h2>
            <p className={styles.modal__description}>
              Are you sure you want to deny the application?
            </p>
            <div className={styles.modal__actions}>
              <Button
                type="button"
                onClick={handleDeny}
                buttonText="Deny"
                className={styles.modal__actionsDeny}
              />
              <Button
                type="button"
                onClick={handleCancel}
                buttonText="Cancel"
                className={styles.modal__actionsCancel}
              />
            </div>
          </>
        ) : (
          <>
            <h2 className={styles.modal__title}>Application Denied</h2>
            <p className={styles.modal__description}>
              Your application has been successfully denied.
            </p>
            <div className={styles.modal__actions}>
              <Button
                type="button"
                onClick={handleGoHome}
                buttonText="Go home"
                className={styles.modal__goHome}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
