import slugsEdmonton from '@/utils/slugsEdmonton'
import slugsCalgaryOthers from '@/utils/slugsCalgary';

export default async function dashboardFetch(){
    const baseUrl = process.env.BASE_URL;

    const responseHr = await fetch(`${baseUrl}/api/hourlyGraph`);
    const fetchedDataHr = await responseHr.json();
    
    const filteredDataHrEdmonton = fetchedDataHr.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataHrEdmonton = await filteredDataHrEdmonton;

    const filteredDataHrCalgaryOthers = fetchedDataHr.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataHrCalgary = await filteredDataHrCalgaryOthers;

    const responseDay = await fetch(`${baseUrl}/api/dailyGraph`);
    const fetchedDataDay = await responseDay.json();

    const filteredDataDayEdmonton = fetchedDataDay.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataDayEdmonton = await filteredDataDayEdmonton;

    const filteredDataDayCalgaryOthers = fetchedDataDay.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataDayCalgary = await filteredDataDayCalgaryOthers;
    
    const responseWeek = await fetch(`${baseUrl}/api/weeklyGraph`);
    const fetchedDataWeek = await responseWeek.json();

    const filteredDataWeekEdmonton = fetchedDataWeek.response.filter((item) => slugsEdmonton.includes(item.slug));
    const dataWeekEdmonton = await filteredDataWeekEdmonton;

    const filteredDataWeekCalgaryOthers = fetchedDataWeek.response.filter((item) => slugsCalgaryOthers.includes(item.slug));
    const dataWeekCalgary = await filteredDataWeekCalgaryOthers;




    return(
        dataHrEdmonton,
        dataHrCalgary,
        dataDayEdmonton,
        dataDayCalgary,
        dataWeekEdmonton,
        dataWeekCalgary
    )
}