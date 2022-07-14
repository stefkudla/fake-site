import Head from 'next/head'
import Cooking from '../../public/assets/stockimage.png'

export const PageMeta: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://i.vimeocdn.com/video/1105089922_200x150.jpg"
      />
    </Head>
  )
}
