import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDateWeek = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 7); // Last week in milliseconds

    const avgWeek = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDateWeek },
          },
        ],
      },
    });

    

    // Round the _avg values
    const roundedAvgWeek = Math.round(avgWeek._avg.waitTimeMin);

    return Response.json(
      { avgWeek: roundedAvgWeek,
        });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}