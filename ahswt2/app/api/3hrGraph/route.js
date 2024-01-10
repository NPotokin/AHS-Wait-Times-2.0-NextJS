import prisma from '@/prisma/prismaClient';

export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 3 * 60 * 60 * 1000); // Last 3 hours in milliseconds

    const tenMinutesInMillis = 10 * 60 * 1000;
    const threeHoursInMillis = 3 * 60 * 60 * 1000;
    const response = [];
    const promises = [];

    for (let i = pastDate.getTime(); i < currentDate.getTime(); i += threeHoursInMillis) {
      const startInterval = new Date(i);
      const endInterval = new Date(i + threeHoursInMillis);

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
          const tenMinInterval = Math.floor((item.dateTime.getTime() - pastDate.getTime()) / tenMinutesInMillis) * tenMinutesInMillis;

          if (!waitTimesForInterval[item.slug]) {
            waitTimesForInterval[item.slug] = {};
          }
          if (!waitTimesForInterval[item.slug][tenMinInterval]) {
            waitTimesForInterval[item.slug][tenMinInterval] = [];
          }
          waitTimesForInterval[item.slug][tenMinInterval].push(item.waitTimeMin);
        }
      });

      const startInterval = new Date(pastDate.getTime() + i * threeHoursInMillis);

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
