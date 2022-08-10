import type { NextApiRequest, NextApiResponse } from 'next'
import { videos } from '@/../videos'

export default function videoHandler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { id } = request.query
  const video = videos.find(video => video.id.toString() === id)

  if (!video) {
    return response.status(400).json('Video not found')
  }

  return response.status(200).json(video)
}
