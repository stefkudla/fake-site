import { PageMeta } from '@/components/Meta'
import { NextPage } from 'next'
import Image from 'next/image'
import Cooking from '../../public/assets/stockimage.png'

const Account: NextPage = () => {
  return (
    <>
      <PageMeta
        title="Account"
        description="Welcome to my ultimate fake site"
      />
      <section className="flex flex-col justify-start items-center accent-gradient h-screen pt-12 transition px-4">
        <h1 className="text-center mb-24">Welcome back, Stefan</h1>
        <Image
          src={Cooking}
          quality={60}
          alt="Cooking delicious food"
          placeholder="blur"
        />
      </section>
    </>
  )
}
export default Account
