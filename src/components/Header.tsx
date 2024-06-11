import Button from '@components/ui/Button/Button'
import Logo from '@components/ui/Logo'
import Navigation from '@components/ui/Navigation'

const Header = () => {
  const navItems = [
    { href: '#credit-card', label: 'Credit card' },
    { href: '#product', label: 'Product' },
    { href: '#account', label: 'Account' },
    { href: '#resources', label: 'Resources' }
  ]

  return (
    <header className="header">
      <Logo className="header__logo" />
      <Navigation items={navItems} className="header__nav" />
      <Button buttonText={'Online Bank'} className="header__button" />
    </header>
  )
}

export default Header
