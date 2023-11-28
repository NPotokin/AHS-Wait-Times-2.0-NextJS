import prisma from '@/prisma/prismaClient'

export async function GET() {
  try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24 * 8); // Last week in milliseconds

    const hourInMillis = 60 * 60 * 1000;
    const twentyFourHourInMillis = 24 * hourInMillis;
    const averageWaitTimes = [];

    for (let i = pastDate.getTime(); i < currentDate.getTime(); i += twentyFourHourInMillis)  {
      const startHour = new Date(i);
      const endHour = new Date(i + twentyFourHourInMillis);

      const dataFor24Hours = await prisma.hospitalTimeStamp.findMany({
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

      const waitTimes = {};
      dataFor24Hours.forEach((item) => {
        if (!waitTimes[item.slug]) {
          waitTimes[item.slug] = [];
        }
        waitTimes[item.slug].push(item.waitTimeMin);
      });

      const hourData = Object.entries(waitTimes).map(([slug, waitTimeArray]) => {
        const formattedDay = startHour.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        const formattedHour = startHour.toLocaleTimeString([], { hour: '2-digit', hour12: false });
        const formattedDateTime = `${formattedDay} ${formattedHour}:00`;
      
        return {
          slug,
          dateTime: formattedDateTime,
          averageWaitTime: Math.round(waitTimeArray.reduce((acc, val) => acc + val, 0) / waitTimeArray.length),
        };
      });
      

      averageWaitTimes.push(...hourData);
    }

    return Response.json({ averageWaitTimes });
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
