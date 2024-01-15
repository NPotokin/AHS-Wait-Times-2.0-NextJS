import prisma from '@/prisma/prismaClient'


export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate3Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 3); // Last 3 hours in milliseconds
    const pastDate6Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 6); // Last 6 hours in milliseconds
    const pastDate12Hr = new Date(currentDate.getTime() - 60 * 60 * 1000 * 12); // Last 12 hours in milliseconds
    const pastDateDay = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds
    const pastDateWeek = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 7); // Last week in milliseconds
    const pastDateMonth = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 7 * 31); // Last montyh in milliseconds

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
    const roundedAvg3Hr = Math.round(avg3Hr._avg.waitTimeMin);
    const roundedAvg6Hr = Math.round(avg6Hr._avg.waitTimeMin);
    const roundedAvg12Hr = Math.round(avg12Hr._avg.waitTimeMin);
    const roundedAvgDay = Math.round(avgDay._avg.waitTimeMin);
    const roundedAvgWeek = Math.round(avgWeek._avg.waitTimeMin);
    const roundedAvgMonth = Math.round(avgMonth._avg.waitTimeMin);

    return Response.json(
      { avg3hr: roundedAvg3Hr, 
        avg6hr: roundedAvg6Hr, 
        avg12hr: roundedAvg12Hr, 
        avgDay: roundedAvgDay, 
        avgWeek: roundedAvgWeek,
        avgMonth: roundedAvgMonth,
       });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}