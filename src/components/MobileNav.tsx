import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { routes } from './MenuItems'
import Logo from './Logo'

const MobileNav: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false)
  const currentPage = useRouter()

  useEffect(() => {
    if (navOpen) {
      setNavOpen(!navOpen)
    }
  }, [currentPage])

  return (
    <nav className="top-0 md:hidden">
      <button
        className="absolute right-3 top-5 z-50"
        aria-label={!navOpen ? 'Open Menu' : 'Close Menu'}
        onClick={() => {
          setNavOpen(!navOpen)
        }}
      >
        {!navOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.6em"
            width="1.6em"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#4c4c51"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8h16M4 16h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.6em"
            width="1.6em"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#fff"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      {navOpen && (
        <div className="absolute top-0 left-0 h-full w-full bg-blueish overflow-hidden accent-gradient">
          <ul className="px-2 pt-12 space-y-6">
            {routes.map(route => (
              <li key={route.name} className="horizontal pb-1">
                <Link href={route.path}>
                  <a className="text-white">{route.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default MobileNav

// close icon
