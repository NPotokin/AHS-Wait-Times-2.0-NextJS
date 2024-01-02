'use server'

import prisma from "@/prisma/prismaClient";


export default async function contactToDB(formData){
    try {
        

        const name = formData.get('name')
        const phone = formData.get('phone')
        const email = formData.get('email')
        const message = formData.get('message')

        const newEntry = await prisma.contactMessage.create({
            data: {
                name: name,
                phone: phone,
                email: email,
                message: message
            },
        })



    } catch (error) {
        return Response.json({ error: `An error ${error} occurred` });
    }
}