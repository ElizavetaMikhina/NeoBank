import NavItem from '@components/ui/NavItem'
import React, { useState } from 'react'

type TNavigationProps = {
  items: { href: string; label: string }[]
  className?: string
}

const Navigation: React.FC<TNavigationProps> = ({ items, className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className={className}>
      <button className={`${className}-burger`} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${className}-list ${isMenuOpen ? 'open' : ''}`}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            href={item.href}
            label={item.label}
            className={className}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
