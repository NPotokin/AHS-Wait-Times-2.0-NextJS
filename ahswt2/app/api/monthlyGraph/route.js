import prisma from '@/prisma/prismaClient';

export const revalidate = 60;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 32); // Last month in milliseconds

    const hourInMillis = 60 * 60 * 1000;
    const twentyFourHourInMillis = 24 * hourInMillis;
    const response = [];

    const queries = [];
    for (let i = pastDate.getTime(); i < currentDate.getTime(); i += twentyFourHourInMillis) {
      const startHour = new Date(i);
      const endHour = new Date(i + twentyFourHourInMillis);

      const queryPromise = prisma.hospitalTimeStamp.findMany({
        where: {
          dateTime: {
            gte: startHour,
            lt: endHour,
          },
        },
        select: {
          waitTimeMin: true,
          slug: true,
          dateTime: true,
        },
      });
      queries.push(queryPromise);
    }

    const results = await Promise.all(queries);
    results.forEach((dataFor24Hours, index) => {
      const waitTimes = {};
      const startHour = new Date(pastDate.getTime() + index * twentyFourHourInMillis);
      dataFor24Hours.forEach((item) => {
        if (!waitTimes[item.slug]) {
          waitTimes[item.slug] = [];
        }
        waitTimes[item.slug].push(item.waitTimeMin);
      });

      const hourData = Object.entries(waitTimes).map(([slug, waitTimeArray]) => {
        const startHourAdjusted = new Date(startHour.getTime() - 7 * 60 * 60 * 1000);
        const formattedDay = startHourAdjusted.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const formattedHour = startHourAdjusted.toLocaleTimeString([], { hour: '2-digit', hour12: false });
        const formattedDateTime = `${formattedDay} ${formattedHour}:00`;

        return {
          slug,
          dateTime: formattedDateTime,
          waitTimeMin: Math.round(waitTimeArray.reduce((acc, val) => acc + val, 0) / waitTimeArray.length),
        };
      });

      response.push(...hourData);
    });

    return Response.json({ response });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
