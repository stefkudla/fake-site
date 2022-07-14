import hero from '../../public/assets/hero-image.png'
import Image from 'next/image'
import type { NextPage } from 'next'
import fsPromises from 'fs/promises'
import path from 'path'
import VideoSlider from '@/components/VideoSlider'
import { VideoData } from '@/types'
import Confetti from '@/components/Confetti'
import { PageMeta } from '@/components/Meta'

const Home: NextPage<VideoData> = ({ allVideos }) => {
  return (
    <>
      <PageMeta
        title="Ultimate Fake Site"
        description="Welcome to my ultimate fake site"
      />
      <section className="full-width-container overflow-hidden h-[670px] lg:h-[840px]">
        <div className="absolute top-0 left-0 w-full h-[670px] lg:h-[840px] -z-20 bg-blueish">
          <Image
            src={hero}
            alt="Running at the beach"
            quality={60}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            priority
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-16 md:mt-20 lg:mt-60 px-4">
          <h1 className="font-bold lg:tracking-wide">
            The world&apos;s greatest fake site
          </h1>
          <p className="my-[26px] text-white max-w-lg mx-auto">
            Create the world&apos;s greatest fake site and enjoy the breeze of
            fresh air when you complete it
          </p>
          <div>
            <Confetti />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <VideoSlider allVideos={allVideos} />
      </section>

      <section className="my-10 text-center container px-2 md:px-6 mx-auto">
        <h2 className="font-bold mb-[22px]">
          Ready to have your cake and eat it too?
        </h2>
        <p className="max-w-5xl mx-auto">
          Start by designing the experience you have in mind. We&apos;ll guide
          you through each step. If your experience meets the quality standards,
          you&apos;ll hear more about what&apos;s next.
        </p>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const filePath = path.join('./src/data', 'videos.json')
  const jsonData = await fsPromises.readFile(filePath, 'utf-8')
  const allVideos = JSON.parse(jsonData)

  return {
    props: { allVideos },
  }
}

export default Home
