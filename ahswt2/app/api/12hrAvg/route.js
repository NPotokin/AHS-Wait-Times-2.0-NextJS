import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate12Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 12); // Last 12 hours in milliseconds
    
    

    const avg12Hr = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDate12Hr },
          },
        ],
      },
    });


    // Round the _avg values
    const roundedAvg12Hr = Math.round(avg12Hr._avg.waitTimeMin);
    
    return Response.json(
      { avg12hr: roundedAvg12Hr, 
        });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}