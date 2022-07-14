import Logo from './Logo'
import Avatar from './Avatar'
import avatarImg from '../../public/assets/avatar_4.png'
import MenuItems from './MenuItems'
import MobileNav from './MobileNav'

const Header: React.FC = () => (
  <header className="mx-auto px-3 py-2 lg:py-4 lg:px-24">
    <nav
      className="flex justify-between items-center"
      aria-label="Main Navigation"
    >
      <Logo priority={true} />
      <div className="flex gap-x-12">
        <MenuItems />
        <div className="hidden md:block">
          <Avatar imgSrc={avatarImg} styles={'rounded-full'} />
        </div>
      </div>
    </nav>
    <MobileNav />
  </header>
)
export default Header
