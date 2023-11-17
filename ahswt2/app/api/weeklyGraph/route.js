import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(){
 
    try {
    const currentDate = new Date();
    const pastDate = new Date(currentDate.getTime() - 60 * 60 * 1000 * 24); // Last hour in milliseconds

    const data = await prisma.hospitalTimeStamp.findMany({
      where: 
      {
        OR: [
          {
            yearUTC: currentDate.getUTCFullYear(),
            monthUTC: currentDate.toLocaleString('default', { month: 'short' }),
            dayUTC: {lte: currentDate.getUTCDate()},
            hourUTC: {lte: currentDate.getUTCHours()},
            minuteUTC: {lte: currentDate.getUTCMinutes()}
          },
          {
            yearUTC: pastDate.getUTCFullYear(),
            monthUTC: pastDate.toLocaleString('default', { month: 'short' }),
            dayUTC: {gte: pastDate.getUTCDate()},
            hourUTC: {gte: pastDate.getUTCHours()},
            minuteUTC: {gte: pastDate.getUTCMinutes()}
          },
        ]
      }
    });

    return Response.json({data});
    
  } catch (error) {
    return Response.json({ error: `An error ${error} occurred` });
  }
}
