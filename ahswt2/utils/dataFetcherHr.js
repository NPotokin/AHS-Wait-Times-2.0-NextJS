export async function dataFetcherHr(slug) {
    try {
      const response = await fetch('https://ahs-wait-times-2-0-next-js-git-main-npotokins-projects.vercel.app/api/hourlyGraph');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      const filteredData = data.filter(item => item.slug === slug);
      return filteredData;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }