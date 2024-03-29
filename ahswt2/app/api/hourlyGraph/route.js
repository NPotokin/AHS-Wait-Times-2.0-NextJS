import prisma from '@/prisma/prismaClient'

export const revalidate = 30;
 

export async function GET(){
 
    try {

    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000); // Last hour in milliseconds


    
    const data = await prisma.hospitalTimeStamp.findMany({
      where: 
      {
        AND: [
          {
            dateTime: {lte: currentDate}
          },
          {
            dateTime: {gte: pastDate}
          },
        ]
      }
    });


    const response = data.map((item) => ({
      slug: item.slug,
      waitTimeMin: item.waitTimeMin,
      dateTime: new Date(item.dateTime.getTime() - 7 * 60 * 60 * 1000).toTimeString().slice(0,5)
    }));
    
    return Response.json({response});
    
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
