import { Button } from '@components/shared/Button/Button'
import { Logo } from '@components/shared/Logo'
import { Navigation } from '@components/shared/Navigation'
import { navItemsHeader } from 'data/navItemsData'

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Navigation items={navItemsHeader} className="header__nav" />
      <Button buttonText={'Online Bank'} className="header__button" />
    </header>
  )
}
