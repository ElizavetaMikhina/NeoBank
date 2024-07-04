import * as Yup from 'yup'

const nameValidation = /^[A-Za-zА-Яа-яЁё-]+$/

export const validationSchema = Yup.object({
  lastName: Yup.string()
    .matches(nameValidation, 'Cannot contain numbers or symbols')
    .required('Enter your last name'),
  firstName: Yup.string()
    .matches(nameValidation, 'Cannot contain numbers or symbols')
    .required('Enter your first name'),
  patronymic: Yup.string().matches(
    nameValidation,
    'Cannot contain numbers or symbols'
  ),
  email: Yup.string()
    .email('Incorrect email address')
    .required('Enter your email'),
  dateOfBirth: Yup.date()
    .max(
      new Date(Date.now() - 18 * 365 * 24 * 60 * 60 * 1000),
      'Must be 18 years or older'
    )
    .required('Enter your date of birth')
    .typeError('Invalid date format'),
  passportSeries: Yup.string()
    .matches(/^\d{4}$/, 'The series must be exactly 4 digits')
    .required('The series must be 4 digits'),
  passportNumber: Yup.string()
    .matches(/^\d{6}$/, 'The number must be exactly 6 digits')
    .required('The number must be 6 digits'),
  term: Yup.string().required('Select term')
})
