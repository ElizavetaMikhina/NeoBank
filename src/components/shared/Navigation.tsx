import { NavItem } from '@components/shared/NavItem'
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

  const menuOpen = isMenuOpen ? 'open' : ''

  return (
    <nav className={className}>
      <button
        className={`${className}-burger ${menuOpen}`}
        onClick={() => setIsMenuOpen((prevState) => !prevState)}>
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
