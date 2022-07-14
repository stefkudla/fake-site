import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/assets/logo.png'

const Logo: React.FC<{ priority?: boolean }> = ({ priority }) => {
  return (
    <Link href="/">
      <a
        aria-label="Website logo, go back to homepage."
        className="hover:translate-x-1 hover:-rotate-2"
      >
        <Image src={logo} alt="Logo" quality={50} priority={priority} />
      </a>
    </Link>
  )
}

export default Logo
