export const selectFieldsPrescoring = {
  options: [
    { value: '6 months', label: '6 months' },
    { value: '12 months', label: '12 months' },
    { value: '18 months', label: '18 months' },
    { value: '24 months', label: '24 months' }
  ]
}

export const formFieldsPrescoring = [
  {
    id: 'lastName',
    name: 'lastName',
    label: 'Your last name',
    type: 'text',
    placeholder: 'For Example Doe',
    required: true
  },
  {
    id: 'firstName',
    name: 'firstName',
    label: 'Your first name',
    type: 'text',
    placeholder: 'For Example Jhon',
    required: true
  },
  {
    id: 'patronymic',
    name: 'patronymic',
    label: 'Your patronymic',
    type: 'text',
    placeholder: 'For Example Victorovich',
    required: false
  },
  {
    id: 'term',
    name: 'term',
    label: 'Select term',
    options: selectFieldsPrescoring.options,
    required: true
  },
  {
    id: 'email',
    name: 'email',
    label: 'Your email',
    type: 'email',
    placeholder: 'test@gmail.com',
    required: true
  },
  {
    id: 'dateOfBirth',
    name: 'dateOfBirth',
    label: 'Your date of birth',
    type: 'date',
    placeholder: 'Select Date and Time',
    required: true
  },
  {
    id: 'passportSeries',
    name: 'passportSeries',
    label: 'Your passport series',
    type: 'text',
    placeholder: '0000',
    required: true
  },
  {
    id: 'passportNumber',
    name: 'passportNumber',
    label: 'Your passport number',
    type: 'text',
    placeholder: '000000',
    required: true
  }
]

export const selectFieldsApplication = {
  gender: [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' }
  ],
  maritalStatus: [
    { value: 'married', label: 'Married' },
    { value: 'not married', label: 'Not married' }
  ],
  dependents: [
    { value: 'none', label: 'None' },
    { value: '1', label: '1' },
    { value: '2', label: '2' }
  ],
  employmentStatus: [
    { value: 'employed', label: 'Employed' },
    { value: 'self-employed', label: 'Self-employed' },
    { value: 'unemployed', label: 'Unemployed' }
  ],
  position: [
    { value: 'manager', label: 'Manager' },
    { value: 'developer', label: 'Developer' },
    { value: 'designer', label: 'Designer' }
  ]
}

export const formFieldsApplication = [
  {
    id: 'gender',
    name: 'gender',
    label: "What's your gender",
    type: 'select',
    options: selectFieldsApplication.gender,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'maritalStatus',
    name: 'maritalStatus',
    label: 'Your marital status',
    type: 'select',
    options: selectFieldsApplication.maritalStatus,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'dependents',
    name: 'dependents',
    label: 'Your number of dependents',
    type: 'select',
    options: selectFieldsApplication.dependents,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'passportDate',
    name: 'passportDate',
    label: 'Date of issue of the passport',
    type: 'date',
    validationMessage: 'Incorrect date of passport issue date',
    placeholder: 'Select Date and Time',
    required: true
  },
  {
    id: 'divisionCode',
    name: 'divisionCode',
    label: 'Division code',
    type: 'text',
    validationMessage: 'The series must be 6 digits',
    placeholder: '000000',
    required: true
  },
  {
    id: 'employmentStatus',
    name: 'employmentStatus',
    label: 'Your employment status',
    type: 'select',
    options: selectFieldsApplication.employmentStatus,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'employerINN',
    name: 'employerINN',
    label: 'Your employer INN',
    type: 'text',
    validationMessage: 'Department code must be 12 digits',
    placeholder: '000000000000',
    required: true
  },
  {
    id: 'salary',
    name: 'salary',
    label: 'Your salary',
    type: 'text',
    validationMessage: 'Enter your salary',
    placeholder: 'Department code must be 12 digits',
    required: true
  },
  {
    id: 'position',
    name: 'position',
    label: 'Your position',
    type: 'select',
    options: selectFieldsApplication.position,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'totalExperience',
    name: 'totalExperience',
    label: 'Your work experience total',
    type: 'text',
    validationMessage: 'Enter your work experience total',
    placeholder: 'For example 10',
    required: true
  },
  {
    id: 'currentExperience',
    name: 'currentExperience',
    label: 'Your work experience current',
    type: 'text',
    validationMessage: 'Enter your work experience current',
    placeholder: 'For example 2',
    required: true
  }
]
