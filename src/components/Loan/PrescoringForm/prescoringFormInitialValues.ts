export type FormValues = {
  lastName: string
  firstName: string
  patronymic: string
  email: string
  dateOfBirth: string
  passportSeries: string
  passportNumber: string
  term: string
}

export const initialValues: FormValues = {
  lastName: '',
  firstName: '',
  patronymic: '',
  email: '',
  dateOfBirth: '',
  passportSeries: '',
  passportNumber: '',
  term: '6 months'
}
