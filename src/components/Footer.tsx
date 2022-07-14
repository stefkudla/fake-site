import Link from 'next/link'
import Logo from './Logo'
import { footerLinks } from './MenuItems'
import { useRouter } from 'next/router'

const Footer: React.FC = () => {
  const Router = useRouter()
  return (
    <footer className="mx-auto px-3  lg:px-24">
      {Router.pathname === '/' && (
        <div className="flex gap-x-24 container pb-24 px-2 md:px-6 mx-auto">
          <div>
            <h3 className="font-bold mb-[22px]">Fakesite</h3>
            <ul className="flex flex-col gap-y-1">
              {footerLinks
                .filter(link => link.tag === 'site')
                .map(link => (
                  <li key={link.name}>
                    <Link href={link.path}>
                      <a>{link.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-[22px]">Account</h3>
            <ul className="flex flex-col gap-y-1">
              {footerLinks
                .filter(link => link.tag === 'account')
                .map(link => (
                  <li key={link.name}>
                    <Link href={link.path}>
                      <a>{link.name}</a>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center horizontal-top h-[80px] pt-4">
        <Logo />
        <ul className="flex gap-x-4">
          {footerLinks
            .filter(link => link.tag === 'logistic')
            .map(link => (
              <li key={link.name}>
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
