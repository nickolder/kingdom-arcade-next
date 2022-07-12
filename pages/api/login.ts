import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons"
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
        where: {
            username: userData.username,
        }
    })

    if (!authenticatedUser) 
        return res.status(400).send(JSON.stringify('username'))

    const match = await bcrypt.compare(userData.password, authenticatedUser.password)

    const acessToken = jwt.sign({ 
        id: authenticatedUser.id, 
        name: authenticatedUser.name, 
        username: authenticatedUser.username, 
        email: authenticatedUser.email 

    }, process.env.ACCESS_TOKEN_SECRET)

    if (!match) 
        return res.status(400).send(JSON.stringify('password'))

    return res.status(200).send(JSON.stringify(acessToken))

}