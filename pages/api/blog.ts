// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface BlogIf{
    id: string,
    title: string,
    contex: string
}

type Data = {
  list: BlogIf[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ list: [
    {
        id: '1',
        title: '标题1',
        contex: '内容1'
    },
    {
        id: '2',
        title: '标题2',
        contex: '内容2'
    },
    {
        id: '3',
        title: '标题3',
        contex: '内容3'
    }
  ] })
}
