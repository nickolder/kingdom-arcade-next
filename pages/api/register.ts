import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

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

    const registeredUser = await prisma.users.create({
        data: userData      
    })

    res.status(200).json(registeredUser)

}