import { Navigation } from '@components/ui/Navigation'
import { navItemsFooter } from 'constants/navItemsData'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contact-info">
          <Link to="/">
            <img
              src="/images/logo.png"
              alt="NeoFlex logo"
              className="footer__logo"
            />
          </Link>

          <div className="footer__contacts">
            <a href="tel:+74959842513" className="footer__tel">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="footer__email">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <Navigation items={navItemsFooter} className="footer__nav" />

        <div className="footer__cookies-info">
          We use cookies to personalize our services and improve the user
          experience of our website. Cookies are small files containing
          information about previous visits to a website. If you do not want to
          use cookies, please change your browser settings
        </div>
      </div>
    </footer>
  )
}
