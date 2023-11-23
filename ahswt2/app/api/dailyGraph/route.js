import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds

    const hoursInDay = 24;
    const hourInMillis = 60 * 60 * 1000;
    const averageWaitTimes = [];

    for (let i = 0; i < hoursInDay; i++) {
      const startHour = new Date(pastDate.getTime() + i * hourInMillis);
      const endHour = new Date(startHour.getTime() + hourInMillis);

      const dataForHour = await prisma.hospitalTimeStamp.findMany({
        where: {
          dateTime: {
            gte: startHour,
            lt: endHour,
          },
        },
        select: {
          waitTimeMin: true,
          slug: true,
        },
      });

      const waitTimesForHour = {};
      dataForHour.forEach((item) => {
        if (!waitTimesForHour[item.slug]) {
          waitTimesForHour[item.slug] = [];
        }
        waitTimesForHour[item.slug].push(item.waitTimeMin);
      });

      const hourData = Object.entries(waitTimesForHour).map(([slug, waitTimes]) => ({
        slug,
        hour: `${startHour.toLocaleTimeString([], { hour: '2-digit', hour12: false })}:00`,
        averageWaitTime: Math.round(
          waitTimes.reduce((acc, val) => acc + val, 0) / waitTimes.length
        ),
      }));

      averageWaitTimes.push(...hourData);
    }

    return Response.json({ averageWaitTimes });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
