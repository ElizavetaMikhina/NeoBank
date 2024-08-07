import { Button } from '@components/shared/Button/Button'
import { FormInput } from '@components/shared/Form/FormInput'
import { FormSelect } from '@components/shared/Form/FormSelect'
import { Spinner } from '@components/shared/Spinner/Spinner'
import { formFieldsApplication } from 'data/formFieldsData'
import { Form, Formik, FormikHelpers } from 'formik'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { FormValues, initialValues } from './applicationFormInitialValues'
import axios from 'axios'
import { validationSchemaApplication } from 'validations/validationSchemas'
import { StepsMessage } from '@components/Loan/StepsMessage/StepsMessage'
import { applicationDecisionMessage } from 'data/stepsMessageData'

export const ApplicationForm: React.FC = () => {
  const { applicationId } = useParams<{ applicationId: string }>()
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true)
    try {
      const response = await axios.put(
        `http://localhost:8080/application/registration/${applicationId}`,
        values,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status !== 200) {
        throw new Error('Failed to register application')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  if (isSubmitted) {
    return <StepsMessage data={applicationDecisionMessage} />
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaApplication}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="application-form">
          <div className="application-form__title-wrapper">
            <h2 className="application-form__title">
              Continuation of the application
            </h2>
            <p className="application-form__step">Step 2 of 5</p>
          </div>
          <ul className="application-form__group">
            {formFieldsApplication
              .slice(0, 5)
              .map(
                ({ id, name, label, type, options, placeholder, required }) =>
                  options ? (
                    <FormSelect
                      key={id}
                      id={id}
                      name={name}
                      label={label}
                      options={options}
                      required={required}
                      className="application-form"
                    />
                  ) : (
                    <FormInput
                      key={id}
                      id={id}
                      name={name}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      className="application-form"
                    />
                  )
              )}
          </ul>
          <h3 className="application-form__subtitle">Employment</h3>
          <ul className="application-form__group">
            {formFieldsApplication
              .slice(5)
              .map(
                ({ id, name, label, type, options, placeholder, required }) =>
                  options ? (
                    <FormSelect
                      key={id}
                      id={id}
                      name={name}
                      label={label}
                      options={options}
                      required={required}
                      className="application-form"
                    />
                  ) : (
                    <FormInput
                      key={id}
                      id={id}
                      name={name}
                      label={label}
                      type={type}
                      placeholder={placeholder}
                      required={required}
                      className="application-form"
                    />
                  )
              )}
          </ul>

          <div className="application-form__button-container">
            {isSubmitting ? (
              <Spinner />
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                buttonText="Continue"
                className="application-form__button"></Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}
