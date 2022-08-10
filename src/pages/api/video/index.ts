import { videos } from '@/../videos'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  return response.status(200).json(videos.map((vid: { id: number }) => vid.id))
}
