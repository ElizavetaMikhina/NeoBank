import { CardFeatures } from '@components/Loan/CardFeatures/CardFeatures'
import { CardInfo } from '@components/Loan/CardInfo'
import { Prescoring } from '@components/Loan/Prescoring'
import { Steps } from '@components/Loan/Steps'

export const Loan = () => {
  return (
    <>
      <CardInfo />
      <CardFeatures />
      <Steps />
      <Prescoring />
    </>
  )
}
