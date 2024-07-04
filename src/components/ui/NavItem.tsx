import React from 'react'
import { Link, useLocation } from 'react-router-dom'

type TNavItemProps = {
  href: string
  label: string
  className?: string
}

export const NavItem: React.FC<TNavItemProps> = ({
  href,
  label,
  className
}) => {
  const location = useLocation()
  const isActive = location.pathname === `/${href}` ? 'active' : ''

  return (
    <li className={`${className}-item `}>
      <Link
        to={href}
        className={`${className}-link ${isActive ? `${className}-link--active` : ''}`}>
        {label}
      </Link>
    </li>
  )
}
