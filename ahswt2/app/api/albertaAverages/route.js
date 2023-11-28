import prisma from '@/prisma/prismaClient'



export async function GET() {
  try {
    const currentDate = new Date();
    const pastDateHr = new Date(currentDate.getTime() - 60 * 60 * 1000); // Last hour in milliseconds
    const pastDateDay = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds
    const pastDateWeek = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 7); // Last week in milliseconds

    const avgHr = await prisma.hospitalTimeStamp.aggregate({
      _avg: {
        waitTimeMin: true,
      },
      where: {
        AND: [
          {
            dateTime: { lte: currentDate },
          },
          {
            dateTime: { gte: pastDateHr },
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

    // Round the _avg values
    const roundedAvgHr = Math.round(avgHr._avg.waitTimeMin);
    const roundedAvgDay = Math.round(avgDay._avg.waitTimeMin);
    const roundedAvgWeek = Math.round(avgWeek._avg.waitTimeMin);

    return Response.json({ avgHr: roundedAvgHr, avgDay: roundedAvgDay, avgWeek: roundedAvgWeek });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}