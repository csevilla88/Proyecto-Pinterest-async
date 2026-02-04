const URL = 'https://api.unsplash.com';

export const getInitialPhotos = async () => {
  const response = await fetch(
    `${URL}/photos?per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
      },
    }
  );
  return response.json();
};

export const searchPhotos = async (searchName) => {
  const response = await fetch(
    `${URL}/search/photos?query=${searchName}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
      },
    }
  );
  //console.log("RESPONSE IN SEARCH PHOTOS:", response);
  const data = await response.json();
  return data.results;
};
export const menuItems = [
  { name: 'Inicio', link: '/' },
  { name: 'Explorar', link: '/explore' },
  { name: 'Crear', link: '/create' },
];