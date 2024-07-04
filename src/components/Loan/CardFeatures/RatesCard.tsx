import { RatesCardItem } from '@components/ui/RatesCardItem'
import { ratesCardData } from 'data/cardFeaturesData'

export const RatesCard = () => {
  return (
    <ul className="rates-card__items">
      {ratesCardData.map(({ title, description }, id) => (
        <RatesCardItem
          key={id}
          title={title}
          description={description}
          className="rates-card"
        />
      ))}
    </ul>
  )
}
