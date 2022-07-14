import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'

const Avatar: React.FC<{
  imgSrc: string | StaticImageData
  styles: string
}> = ({ imgSrc, styles }) => {
  const currentRoute = useRouter().pathname
  return (
    <div
      className={
        currentRoute === '/'
          ? 'relative rounded-full w-[38px] h-[38px] overflow-hidden z-40 border border-white'
          : 'relative rounded-full w-[38px] h-[38px] overflow-hidden z-40 border border-blueish'
      }
    >
      <Image
        src={imgSrc}
        alt="Avatar"
        layout="fill"
        quality={45}
        className={styles}
        placeholder="blur"
      />
    </div>
  )
}

export default Avatar
