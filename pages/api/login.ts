import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/prisma"

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

    const userData = JSON.parse(req.body)

    const authenticatedUser = await prisma.users.findUnique({
        select: {
            username: true,
            password: true,
        },

        where: {
            username: userData.username,
        }
    })

    if (authenticatedUser) {
        bcrypt.compare(userData.password, authenticatedUser.password, () => {
            jwt.sign(userData.username, process.env.ACCESS_TOKEN_SECRET)
            res.status(200)
        })    
    }
}