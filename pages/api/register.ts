import type { NextApiRequest, NextApiResponse } from "next"

import { assert, object, string, size, refine } from 'superstruct'
import isEmail from 'isemail'

import { prisma } from "../../prisma/prisma"

const bcrypt = require('bcrypt')

const Signup = object({
    name: size(string(), 2, 30),
    username: size(string(), 2, 20),
    email: refine(string(), 'email', (v) => isEmail.validate(v)),
    password: size(string(), 8, 30),
})

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

    let errors = []

    try {
        assert(userData, Signup)

        const registeredUser = await prisma.users.create({
            data: {
                ...userData,
                password: await bcrypt.hash(userData.password, 10),
            }     
        })

    } catch (err: any) {
        for (const failure of err.failures()) {
            errors.push(failure)
        }

        return res.status(400).json(JSON.stringify(userData))
    }

}