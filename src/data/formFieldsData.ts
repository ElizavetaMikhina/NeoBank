export const selectFieldsPrescoring = {
  options: [
    { value: 6, label: '6 months' },
    { value: 12, label: '12 months' },
    { value: 18, label: '18 months' },
    { value: 24, label: '24 months' }
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
    id: 'middleName',
    name: 'middleName',
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
    id: 'birthdate',
    name: 'birthdate',
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

const selectFieldsApplication = {
  gender: [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' }
  ],
  maritalStatus: [
    { value: 'MARRIED', label: 'Married' },
    { value: 'DIVORCED', label: 'Divorced' },
    { value: 'SINGLE', label: 'Single' },
    { value: 'WIDOW_WIDOWER', label: 'Widow/Widower' }
  ],
  dependentAmount: [
    { value: 1, label: '1' },
    { value: 2, label: '2' }
  ],
  employmentStatus: [
    { value: 'UNEMPLOYED', label: 'Unemployed' },
    { value: 'SELF_EMPLOYED', label: 'Self-employed' },
    { value: 'EMPLOYED', label: 'Employed' },
    { value: 'BUSINESS_OWNER', label: 'Business Owner' }
  ],
  position: [
    { value: 'WORKER', label: 'Worker' },
    { value: 'MID_MANAGER', label: 'Mid Manager' },
    { value: 'TOP_MANAGER', label: 'Top Manager' },
    { value: 'OWNER', label: 'Owner' }
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
    id: 'dependentAmount',
    name: 'dependentAmount',
    label: 'Your number of dependents',
    type: 'select',
    options: selectFieldsApplication.dependentAmount,
    validationMessage: 'Select one of the options',
    required: true
  },
  {
    id: 'passportIssueDate',
    name: 'passportIssueDate',
    label: 'Date of issue of the passport',
    type: 'date',
    validationMessage: 'Incorrect date of passport issue date',
    placeholder: 'Select Date and Time',
    required: true
  },
  {
    id: 'passportIssueBranch',
    name: 'passportIssueBranch',
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
    type: 'number',
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
    id: 'workExperienceTotal',
    name: 'workExperienceTotal',
    label: 'Your work experience total',
    type: 'number',
    validationMessage: 'Enter your work experience total',
    placeholder: 'For example 10',
    required: true
  },
  {
    id: 'workExperienceCurrent',
    name: 'workExperienceCurrent',
    label: 'Your work experience current',
    type: 'number',
    validationMessage: 'Enter your work experience current',
    placeholder: 'For example 2',
    required: true
  }
]
