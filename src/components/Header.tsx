import { Button } from '@components/ui/Button/Button'
import { Logo } from '@components/ui/Logo'
import { Navigation } from '@components/ui/Navigation'
import { navItemsHeader } from 'constants/navItemsData'

export const Header = () => {
  return (
    <header className="header">
      <Logo className="header__logo" />
      <Navigation items={navItemsHeader} className="header__nav" />
      <Button buttonText={'Online Bank'} className="header__button" />
    </header>
  )
}
