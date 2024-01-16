import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDateDay = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds

    

    const avgDay = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDateDay },
          },
        ],
      },
    });

    
    // Round the _avg values
    const roundedAvgDay = Math.round(avgDay._avg.waitTimeMin);

    return Response.json(
      { avgDay: roundedAvgDay, 
           });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}