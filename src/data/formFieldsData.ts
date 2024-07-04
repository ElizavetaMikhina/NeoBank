export const formFieldsName = [
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Your last name',
    type: 'text',
    validationMessage: 'Enter your last name',
    placeholder: 'For Example Doe',
    required: true
  },
  {
    id: 'firstName',
    name: 'firstName',
    label: 'Your first name',
    type: 'text',
    validationMessage: 'Enter your first name',
    placeholder: 'For Example Jhon',
    required: true
  },
  {
    id: 'patronymic',
    name: 'patronymic',
    label: 'Your patronymic',
    type: 'text',
    validationMessage: '',
    placeholder: 'For Example Victorovich',
    required: false
  }
]

export const formFields = [
  {
    id: 'email',
    name: 'email',
    label: 'Your email',
    type: 'email',
    validationMessage: 'Incorrect email address',
    placeholder: 'test@gmail.com',
    required: true
  },
  {
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    label: 'Your date of birth',
    type: 'date',
    validationMessage: 'Incorrect date of birth',
    placeholder: 'Select Date and Time',
    required: true
  },
  {
    id: 'passportSeries',
    name: 'passportSeries',
    label: 'Your passport series',
    type: 'text',
    validationMessage: 'The series must be 4 digits',
    placeholder: '0000',
    required: true
  },
  {
    id: 'passportNumber',
    name: 'passportNumber',
    label: 'Your passport number',
    type: 'text',
    validationMessage: 'The series must be 6 digits',
    placeholder: '000000',
    required: true
  }
]

export const selectFields = [
  {
    id: 'term',
    name: 'term',
    label: 'Select term',
    options: [
      { value: '6 months', label: '6 months' },
      { value: '12 months', label: '12 months' },
      { value: '18 months', label: '18 months' },
      { value: '24 months', label: '24 months' }
    ],
    required: true
  }
]
