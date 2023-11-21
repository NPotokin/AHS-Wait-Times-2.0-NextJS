import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(){
 
    try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds

    const data = await prisma.hospitalTimeStamp.findMany({
      where: 
      {
        OR: [
          {
            dateTime: {lte: currentDate}
          },
          {
            dateTime: {gte: pastDate}
          },
        ]
      }
    });

    const updatedData = data.map((item) => ({
      Name: item.Name,
      slug: item.slug,
      waitTimeMin: item.waitTimeMin,
      dateTime: item.dateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }));

    return Response.json({updatedData});
    
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
