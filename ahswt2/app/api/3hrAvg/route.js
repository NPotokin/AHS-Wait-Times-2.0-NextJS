import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate3Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 3); // Last 3 hours in milliseconds
    
    const avg3Hr = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDate3Hr },
          },
        ],
      },
    });


    // Round the _avg values
    const roundedAvg3Hr = Math.round(avg3Hr._avg.waitTimeMin);
    

    return Response.json(
      { avg3hr: roundedAvg3Hr}
      );
      
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}