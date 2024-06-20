import React from 'react'
import { TNavItemProps } from 'types/types'

export const NavItem: React.FC<TNavItemProps> = ({
  href,
  label,
  className
}) => {
  return (
    <li className={`${className}-item`}>
      <a href={href}>{label}</a>
      {/* TODO: заменить <a></a> на <Link></Link> */}
    </li>
  )
}
