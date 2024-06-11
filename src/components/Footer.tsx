import Navigation from '@components/ui/Navigation'
import React from 'react'

const Footer = () => {
  const navItems = [
    { href: '#about', label: 'About bank' },
    { href: '#question', label: 'Ask a Question' },
    { href: '#quality', label: 'Quality of service' },
    { href: '#requisites', label: 'Requisites' },
    { href: '#press-center', label: 'Press center' },
    { href: '#career', label: 'Bank career' },
    { href: '#investors', label: 'Investors' },
    { href: '#analytics', label: 'Analytics' },
    { href: '#business-and-processes', label: 'Business and processes' },
    {
      href: '#compliance',
      label: 'Compliance and business ethics'
    }
  ]
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__contact-info">
          <img
            src="/images/logo.png"
            alt="NeoFlex logo"
            className="footer__logo"
          />
          <div className="footer__contacts">
            <a href="tel:+74959842513" className="footer__tel">
              +7 (495) 984 25 13
            </a>
            <a href="mailto:info@neoflex.ru" className="footer__email">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <Navigation items={navItems} className="footer__nav" />

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

export default Footer
