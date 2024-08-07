import { Modal } from '@components/Loan/Modal/Modal'
import { PaymentTable } from '@components/Loan/PaymentSchedule/PaymentTable'
import { StepsMessage } from '@components/Loan/StepsMessage/StepsMessage'
import { Button } from '@components/shared/Button/Button'
import { Checkbox } from '@components/shared/Checkbox/Checkbox'
import { Spinner } from '@components/shared/Spinner/Spinner'
import axios from 'axios'
import { documentsFormationMessage } from 'data/stepsMessageData'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type PaymentScheduleItem = {
  number: number
  date: string
  totalPayment: number
  interestPayment: number
  debtPayment: number
  remainingDebt: number
}

export const PaymentSchedule = () => {
  const { applicationId } = useParams<{ applicationId: string }>()
  const [paymentSchedule, setPaymentSchedule] = useState<PaymentScheduleItem[]>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [consentGiven, setConsentGiven] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const fetchPaymentSchedule = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/admin/application/${applicationId}`
        )

        if (
          response.data &&
          response.data.credit &&
          Array.isArray(response.data.credit.paymentSchedule)
        ) {
          setPaymentSchedule(response.data.credit.paymentSchedule)
        } else {
          throw new Error('Unexpected response format')
        }

        setLoading(false)
      } catch (error) {
        setError('Failed to fetch payment schedule')
        setLoading(false)
      }
    }

    fetchPaymentSchedule()
  }, [applicationId])

  const handleSubmit = async () => {
    setIsSubmitting(true)
    try {
      console.log('запрос отправлен')
      console.log('applicationId: ' + applicationId)
      const response = await axios.post(
        `http://localhost:8080/document/${applicationId}`
      )
      if (response.status !== 200) {
        throw new Error('Failed to submit document')
      }
      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
      setError('Failed to submit document')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDeny = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  if (loading) {
    return <Spinner />
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (isSubmitted) {
    return <StepsMessage data={documentsFormationMessage} />
  }

  return (
    <section className="payment-schedule">
      <div className="payment-schedule__title-wrapper">
        <h2 className="payment-schedule__title">Payment Schedule</h2>
        <p className="payment-schedule__step">Step 3 of 5</p>
      </div>
      <PaymentTable
        columns={[
          'number',
          'date',
          'total Payment',
          'interest Payment',
          'debt Payment',
          'remaining Debt'
        ]}
        data={paymentSchedule}
      />
      <div className="payment-schedule__buttons-container">
        <Button
          type="button"
          className="payment-schedule__button deny"
          onClick={handleDeny}
          buttonText="Deny"
        />
        <div className="payment-schedule__agree-container">
          <Checkbox
            label="I agree with the payment schedule"
            className="payment-schedule"
            checked={consentGiven}
            onChange={setConsentGiven}
          />
          <Button
            type="button"
            className="payment-schedule__button send"
            disabled={!consentGiven || isSubmitting}
            onClick={handleSubmit}
            buttonText="Send"
          />
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} />
    </section>
  )
}
