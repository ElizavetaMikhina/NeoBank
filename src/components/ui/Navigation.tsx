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

  return (
    <nav className={className}>
      <button
        className={`${className}-burger ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${className}-list ${isMenuOpen ? 'open' : ''}`}>
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
