import { AboutCardItem } from '@components/ui/AboutCardItem/AboutCardItem'
import { aboutCardData } from 'data/cardFeaturesData'

export const AboutCard = () => {
  return (
    <ul className="about-card__items">
      {aboutCardData.map((item, id) => (
        <AboutCardItem
          key={id}
          icon={item.iconSrc}
          title={item.title}
          description={item.description}
          className="about-card"
        />
      ))}
    </ul>
  )
}
