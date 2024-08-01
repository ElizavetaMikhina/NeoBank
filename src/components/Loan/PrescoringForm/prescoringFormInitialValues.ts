export type FormValues = {
  lastName: string
  firstName: string
  middleName: string
  email: string
  birthdate: string
  passportSeries: string
  passportNumber: string
  term: number
}

export const initialValues: FormValues = {
  lastName: '',
  firstName: '',
  middleName: '',
  email: '',
  birthdate: '',
  passportSeries: '',
  passportNumber: '',
  term: 6
}
