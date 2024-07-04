import { AboutCardItem } from '@components/ui/AboutCardItem/AboutCardItem'
import { cashbackCardData } from 'data/cardFeaturesData'

export const CashbackCard = () => {
  return (
    <ul className="cashback-card__items">
      {cashbackCardData.map((item, id) => (
        <AboutCardItem
          key={id}
          title={item.description}
          description={item.percent}
          className="cashback-card"
        />
      ))}
    </ul>
  )
}
