import { NavItem } from '@components/ui/NavItem'
import React, { useState } from 'react'

type TNavigationProps = {
  items: { href: string; label: string }[]
  className?: string
}

export const Navigation: React.FC<TNavigationProps> = ({
  items,
  className
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuOpen = isMenuOpen ? 'open' : ''

  return (
    <nav className={className}>
      <button
        className={`${className}-burger ${menuOpen}`}
        onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${className}-list ${menuOpen}`}>
        {items.map(({ href, label }, index) => (
          <NavItem
            key={index}
            href={href}
            label={label}
            className={className}
          />
        ))}
      </ul>
    </nav>
  )
}
