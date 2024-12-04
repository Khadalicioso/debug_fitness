export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '9b61bb31cdmsh47a27d96d6c3b05p172fa6jsn3a005d6fc0a9',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '9b61bb31cdmsh47a27d96d6c3b05p172fa6jsn3a005d6fc0a9',
  },
};

export const fetchData = async (url, options) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log('API Response:', { url, data }); // Debug log
    // Handle bodyPartList endpoint specifically
    if (url.includes('bodyPartList')) {
      return Array.isArray(data) ? data : [];
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return url.includes('bodyPartList') ? [] : {};
  }
};