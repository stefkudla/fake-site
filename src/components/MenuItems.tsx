import { MouseEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const routes: { name: string; path: string }[] = [
  {
    name: 'Account',
    path: '/account',
  },
  {
    name: 'Help',
    path: '/help',
  },
]

export const footerLinks: { name: string; path: string; tag: string }[] = [
  {
    name: 'About us',
    path: '/about',
    tag: 'site',
  },
  { name: 'Press', path: '/press', tag: 'site' },
  {
    name: 'Policies',
    path: '/policies',
    tag: 'site',
  },
  {
    name: 'Help',
    path: '/help',
    tag: 'site',
  },
  {
    name: 'Edit',
    path: '/edit',
    tag: 'account',
  },
  {
    name: 'Friends',
    path: '/friends',
    tag: 'account',
  },
  {
    name: 'Social',
    path: '/social',
    tag: 'account',
  },
  {
    name: 'Delete Profile',
    path: '/delete-profile',
    tag: 'account',
  },
  {
    name: 'Terms',
    path: '/terms',
    tag: 'logistic',
  },
  {
    name: 'Privacy',
    path: '/privacy',
    tag: 'logistic',
  },
  {
    name: 'Site Map',
    path: '/site-map',
    tag: 'logistic',
  },
]

const MenuItems: React.FC = () => {
  const removeFocus = (e: MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.blur()
  }
  const currentRoute = useRouter().pathname
  return (
    <>
      <div className="relative items-center justify-start flex-grow hidden space-x-14 md:flex">
        {routes.map(route => (
          <Link key={route.path} href={route.path}>
            <a
              className={currentRoute === '/' ? 'text-white' : ''}
              onClick={removeFocus}
            >
              {route.name}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}
export default MenuItems
