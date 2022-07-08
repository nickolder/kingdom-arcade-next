import type { NextApiRequest, NextApiResponse } from "next"
import { prisma } from "../../prisma/prisma"

const bcrypt = require('bcrypt')

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
        where: {
            username: userData.username, 
        }
    })

    res.status(200).json(authenticatedUser)

}