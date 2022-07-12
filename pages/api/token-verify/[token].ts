import type { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

const jwt = require('jsonwebtoken')

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
    const token = req.query

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, decoded: any) => {
      return res.json({})
    })
}
