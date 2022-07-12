import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/prisma"

require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

export default async (
    req: NextApiRequest,
    res: NextApiResponse,
) => {

    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Método proibido'
        })
    }

    const userData = req.body

    const authenticatedUser = await prisma.users.findUnique({
        select: {
            id: true,
            username: true,
            password: true,
        },

        where: {
            username: userData.username,
        }
    })

    if (!authenticatedUser) 
        return res.status(400).json('username')

    const match = await bcrypt.compare(userData.password, authenticatedUser.password)
    const acessToken = jwt.sign({ id: authenticatedUser.id, username: authenticatedUser.username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })

    if (!match) 
        return res.status(400).json('password')

    return res.status(200).json({ acessToken: acessToken })

}