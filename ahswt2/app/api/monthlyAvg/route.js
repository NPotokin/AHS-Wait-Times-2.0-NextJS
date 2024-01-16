import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDateMonth = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 7 * 31); // Last montyh in milliseconds

    
    const avgMonth = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDateMonth },
          },
        ],
      },
    });

    // Round the _avg values
    const roundedAvgMonth = Math.round(avgMonth._avg.waitTimeMin);

    return Response.json(
      { avgMonth: roundedAvgMonth,
       });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}