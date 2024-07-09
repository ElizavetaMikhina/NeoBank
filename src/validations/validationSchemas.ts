import * as Yup from 'yup'

const nameValidation = /^[A-Za-zА-Яа-яЁё-]+$/

export const validationSchemaPrescoring = Yup.object({
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

export const validationSchemaApplication = Yup.object({
  gender: Yup.string().required('Select your gender'),
  maritalStatus: Yup.string().required('Enter your marital status'),
  dependents: Yup.string().required('Select the number of dependents'),
  passportDate: Yup.date()
    .required('Enter the date of issue of the passport')
    .typeError('Invalid date format'),
  divisionCode: Yup.string()
    .matches(/^\d{6}$/, 'The series must be 6 digits')
    .required('The series must be 6 digits'),
  employmentStatus: Yup.string().required('Select your employment status'),
  employerINN: Yup.string()
    .matches(/^\d{12}$/, 'Department code must be 12 digits')
    .required('Enter your employer INN'),
  salary: Yup.number()
    .typeError('Enter a valid salary')
    .required('Enter your salary'),
  position: Yup.string().required('Select your position'),
  totalExperience: Yup.number()
    .typeError('Enter your work experience total')
    .required('Enter your work experience total'),
  currentExperience: Yup.number()
    .typeError('Enter your work experience current')
    .required('Enter your work experience current')
})
