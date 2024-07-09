import { Button } from '@components/ui/Button/Button'
import { FormInput } from '@components/ui/Form/FormInput'
import { FormSelect } from '@components/ui/Form/FormSelect'
import { Spinner } from '@components/ui/Spinner/Spinner'
import { formFieldsPrescoring } from 'data/formFieldsData'
import { Form, Formik, FormikHelpers } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { validationSchemaPrescoring } from 'validations/validationSchemas'

type FormValues = {
  lastName: string
  firstName: string
  patronymic: string
  email: string
  dateOfBirth: string
  passportSeries: string
  passportNumber: string
  term: string
}

export const PrescoringForm: React.FC = () => {
  const navigate = useNavigate()

  const initialValues: FormValues = {
    lastName: '',
    firstName: '',
    patronymic: '',
    email: '',
    dateOfBirth: '',
    passportSeries: '',
    passportNumber: '',
    term: '6 months'
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setSubmitting(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate('/application')
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchemaPrescoring}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="prescoring-form">
          <h2 className="prescoring-form__title">Contact Information</h2>
          <ul className="prescoring-form__contact-info">
            {formFieldsPrescoring.map(
              ({ id, name, label, type, options, placeholder, required }) =>
                options ? (
                  <FormSelect
                    key={id}
                    id={id}
                    name={name}
                    label={label}
                    options={options}
                    required={required}
                    className="prescoring-form"
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
                    className="prescoring-form"
                  />
                )
            )}
          </ul>
          <div className="prescoring-form__button-container">
            {isSubmitting ? (
              <Spinner className="prescoring-form" />
            ) : (
              <Button
                type="submit"
                disabled={isSubmitting}
                buttonText="Continue"
                className="prescoring-form__button"
              />
            )}
          </div>
        </Form>
      )}
    </Formik>
  )
}
