import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import PlayIcon from '../../public/assets/playbtn.png'
import onClickPreview from 'react-player'
import { useSwipeable } from 'react-swipeable'
import { VideoData } from '@/types'

const VideoSlider: React.FC<VideoData> = ({ allVideos }) => {
  const [currentVideo, setCurrentVideo] = useState(0)
  const length = allVideos.length
  const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

  const previousSlide = () => {
    setCurrentVideo(currentVideo === 0 ? length - 1 : currentVideo - 1)
  }

  const nextSlide = () => {
    setCurrentVideo(currentVideo === length - 1 ? 0 : currentVideo + 1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentVideo(currentVideo + 1),
    onSwipedRight: () => setCurrentVideo(currentVideo - 1),
  })

  return (
    <div className="container px-2 md:px-6 mx-auto pb-24">
      <div
        className="container flex items-csenter justify-around"
        {...handlers}
      >
        {allVideos.map((video, index) => {
          return (
            index === currentVideo && (
              <div
                className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 lg:place-content-stretch lg:gap-x-10 max-w-full md:mx-3 container"
                key={video.id}
              >
                <h2 className="font-bold text-center lg:text-left pb-2 min-h-[80px] horizontal">
                  {video.title}
                </h2>
                <div className="mt-10 flex items-center justify-around lg:row-span-2 w-full min-h-[240px] md:min-h-[400px]">
                  <button
                    aria-label="Next video"
                    className="scale-50 md:scale-100 border-2 border-blackish rounded-md p-2 hover:bg-reddish transition-all hover:animate-pulse shadow-sm hover:shadow-lg"
                    onClick={previousSlide}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        points="6 2 18 12 6 22"
                        transform="matrix(-1 0 0 1 24 0)"
                      ></polygon>
                    </svg>
                  </button>
                  <div className="text-center h-[180px] md:h-[380px] w-[340px] md:w-[600px] mx-2 bg-clip-content bg-black">
                    <ReactPlayer
                      url={video.url}
                      light={true}
                      width="100%"
                      height="100%"
                      playing
                      controls={true}
                      playsinline={true}
                      playIcon={
                        <button
                          aria-label="Play video"
                          onClick={() => onClickPreview}
                        >
                          <div className="relative w-[52px] h-[52px] md:w-[80px] md:h-[80px] hover:opacity-75 transition-opacity">
                            <Image
                              src={PlayIcon}
                              layout="fill"
                              alt="Play button"
                              quality={20}
                              className="hover:text-reddish"
                            />
                          </div>
                        </button>
                      }
                    />
                    <span className="mx-auto text-blueish">
                      {index + 1} | {length}
                    </span>
                  </div>
                  <button
                    aria-label="Previous video"
                    className="scale-50 md:scale-100 border-2 border-blackish rounded-md p-2 hover:bg-reddish transition-all hover:animate-pulse shadow-sm hover:shadow-lg"
                    onClick={nextSlide}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        points="6 2 18 12 6 22"
                      ></polygon>
                    </svg>
                  </button>
                </div>
                <p className="mt-10 lg:mt-0 min-h-[100px] py-2 lg:self-start">
                  {video.description.split('<br />').slice(0, 2)}
                </p>
              </div>
            )
          )
        })}
      </div>
    </div>
  )
}

export default VideoSlider
