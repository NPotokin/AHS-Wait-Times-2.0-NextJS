'use server'

import prisma from "@/prisma/prismaClient";
import { redirect } from 'next/navigation'


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


        Response.json(newEntry);
        redirect('app/contact/thankyou/');

    } catch (error) {
        return Response.json({ error: `An error ${error} occurred` });
    }
}