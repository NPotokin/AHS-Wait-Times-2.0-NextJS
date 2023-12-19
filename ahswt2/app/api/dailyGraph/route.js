import prisma from '@/prisma/prismaClient'
import { revalidatePath } from 'next/cache';

export const revalidate = 30;

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last day in milliseconds

    const hoursInDay = 24;
    const hourInMillis = 60 * 60 * 1000;
    const response = [];

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
    dateTime: new Date(startHour.getTime() - 7 * 60 * 60 * 1000).toTimeString().slice(0,5),
    waitTimeMin: Math.round(
    waitTimes.reduce((acc, val) => acc + val, 0) / waitTimes.length
  ),
}));


      response.push(...hourData);
    }

    return Response.json({ response });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
