import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate6Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 6); // Last 6 hours in milliseconds

    
    const avg6Hr = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDate6Hr },
          },
        ],
      },
    });

    

    // Round the _avg values
    const roundedAvg6Hr = Math.round(avg6Hr._avg.waitTimeMin);

    return Response.json(
      { avg6hr: roundedAvg6Hr, 
        });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}