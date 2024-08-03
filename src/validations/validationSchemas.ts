import * as Yup from 'yup'

const nameValidation = /^[A-Za-zА-Яа-яЁё-]+$/

export const validationSchemaPrescoring = Yup.object({
  lastName: Yup.string()
    .matches(nameValidation, 'Cannot contain numbers or symbols')
    .required('Enter your last name'),
  firstName: Yup.string()
    .matches(nameValidation, 'Cannot contain numbers or symbols')
    .required('Enter your first name'),
  middleName: Yup.string().matches(
    nameValidation,
    'Cannot contain numbers or symbols'
  ),
  email: Yup.string()
    .email('Incorrect email address')
    .required('Enter your email'),
  birthdate: Yup.date()
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
  gender: Yup.string()
    .oneOf(['MALE', 'FEMALE'], 'Select a valid gender')
    .required('Select your gender'),
  maritalStatus: Yup.string()
    .oneOf(
      ['MARRIED', 'DIVORCED', 'SINGLE', 'WIDOW_WIDOWER'],
      'Select a valid marital status'
    )
    .required('Select your marital status'),
  dependentAmount: Yup.number()
    .oneOf([1, 2], 'Select a valid marital status')
    .required('Enter the number of dependents'),
  passportIssueDate: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format, should be YYYY-MM-DD')
    .test('valid-date', 'Date cannot be in the future', (value) => {
      if (!value) return false
      const date = new Date(value)
      return date <= new Date()
    })
    .required('Enter the date of issue of the passport'),
  passportIssueBranch: Yup.string()
    .matches(/^\d{6}$/, 'Passport issue branch must be 6 digits')
    .required('Enter the passport issue branch'),
  employmentStatus: Yup.string()
    .oneOf(
      ['UNEMPLOYED', 'SELF_EMPLOYED', 'EMPLOYED', 'BUSINESS_OWNER'],
      'Select a valid employment status'
    )
    .required('Select your employment status'),
  employerINN: Yup.string()
    .matches(/^\d{12}$/, 'Employer INN must be 12 digits')
    .required('Enter your employer INN'),
  salary: Yup.number()
    .required('Enter your salary')
    .positive('Salary must be a positive number'),
  position: Yup.string()
    .oneOf(
      ['WORKER', 'MID_MANAGER', 'TOP_MANAGER', 'OWNER'],
      'Select a valid position'
    )
    .required('Select your position'),
  workExperienceTotal: Yup.number()
    .required('Enter your total work experience')
    .max(99, 'Work experience total should be up to two digits')
    .positive('Work experience must be a positive number'),
  workExperienceCurrent: Yup.number()
    .required('Enter your current work experience')
    .max(99, 'Current work experience should be up to two digits')
    .positive('Work experience must be a positive number')
})
