import prisma from '@/prisma/prismaClient';

export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 6 * 60 * 60 * 1000); // Last 6 hours in milliseconds

    const thirtyMinutesInMillis = 30 * 60 * 1000;
    const sixHoursInMillis = 6 * 60 * 60 * 1000;
    const response = [];
    const promises = [];

    for (let i = pastDate.getTime(); i < currentDate.getTime(); i += sixHoursInMillis) {
      const startInterval = new Date(i);
      const endInterval = new Date(i + sixHoursInMillis);

      const promise = prisma.hospitalTimeStamp.findMany({
        where: {
          dateTime: {
            gte: startInterval,
            lt: endInterval,
          },
        },
        select: {
          waitTimeMin: true,
          slug: true,
          dateTime: true, // Include dateTime field in selection
        },
      });

      promises.push(promise);
    }

    const intervalData = await Promise.all(promises);

    for (let i = 0; i < intervalData.length; i++) {
      const waitTimesForInterval = {};
      intervalData[i].forEach((item) => {
        // Check if dateTime is defined before accessing it
        if (item.dateTime && item.dateTime.getTime) {
          const thirtyMinInterval = Math.floor((item.dateTime.getTime() - pastDate.getTime()) / thirtyMinutesInMillis) * thirtyMinutesInMillis;

          if (!waitTimesForInterval[item.slug]) {
            waitTimesForInterval[item.slug] = {};
          }
          if (!waitTimesForInterval[item.slug][thirtyMinInterval]) {
            waitTimesForInterval[item.slug][thirtyMinInterval] = [];
          }
          waitTimesForInterval[item.slug][thirtyMinInterval].push(item.waitTimeMin);
        }
      });

      const startInterval = new Date(pastDate.getTime() + i * sixHoursInMillis);

      const intervalAverages = Object.entries(waitTimesForInterval).flatMap(([slug, intervals]) =>
        Object.entries(intervals).map(([interval, waitTimes]) => ({
          slug,
          dateTime: new Date(parseInt(interval, 10) + pastDate.getTime() - 7 * 60 * 60 * 1000).toTimeString().slice(0, 5),
          waitTimeMin: Math.round(waitTimes.reduce((acc, val) => acc + val, 0) / waitTimes.length),
        }))
      );

      response.push(...intervalAverages);
    }

    return Response.json({ response });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
