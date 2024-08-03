export type FormValues = {
  gender: 'MALE' | 'FAMALE'
  maritalStatus: 'MARRIED' | 'DIVORCED' | 'SINGLE' | 'WIDOW_WIDOWER'
  dependentAmount: number
  passportIssueDate: string
  passportIssueBranch: string
  employmentStatus:
    | 'UNEMPLOYED'
    | 'SELF_EMPLOYED'
    | 'EMPLOYED'
    | 'BUSINESS_OWNER'
  employerINN: string
  salary: number
  position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER'
  workExperienceTotal: number
  workExperienceCurrent: number
}

export const initialValues: FormValues = {
  gender: 'MALE',
  maritalStatus: 'MARRIED',
  dependentAmount: 0,
  passportIssueDate: '',
  passportIssueBranch: '',
  employmentStatus: 'UNEMPLOYED',
  employerINN: '',
  salary: 0,
  position: 'WORKER',
  workExperienceTotal: 0,
  workExperienceCurrent: 0
}
