export type FormValues = {
  gender: string
  maritalStatus: string
  dependents: string
  passportDate: string
  divisionCode: string
  employmentStatus: string
  employerINN: string
  salary: string
  position: string
  totalExperience: string
  currentExperience: string
}

export const initialValues: FormValues = {
  gender: 'Male',
  maritalStatus: '',
  dependents: 'None',
  passportDate: '',
  divisionCode: '',
  employmentStatus: 'Employed',
  employerINN: '',
  salary: '',
  position: 'Manager',
  totalExperience: '',
  currentExperience: ''
}
