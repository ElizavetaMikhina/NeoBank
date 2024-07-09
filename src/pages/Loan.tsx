import { CardFeatures } from '@components/Loan/CardFeatures/CardFeatures'
import { CardInfo } from '@components/Loan/CardInfo'
import { Steps } from '@components/Loan/Steps'
import { TariffSelection } from '@components/Loan/TariffSelection'

export const Loan = () => {
  return (
    <>
      <CardInfo />
      <CardFeatures />
      <Steps />
      <TariffSelection />
    </>
  )
}
