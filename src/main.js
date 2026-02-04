import './styles/main.scss';
import { getInitialPhotos, searchPhotos } from './data/data';
import { Header } from './components/Header';
import { Gallery } from './components/Gallery';


const app = document.querySelector('#app');

const init = async () => {
  Header(handleSearch);

  const photos = await getInitialPhotos(); 
  sessionStorage.setItem("Gallery", JSON.stringify(photos));
  Gallery(photos);
};

const handleSearch = async (query) => {
  const results = await searchPhotos(query);
  console.log("QUERY IN HANDLE SEARCH:", query);
  console.log("RESULTS IN HANDLE SEARCH:", results);
  Gallery(results);
};

init();


/*let initialPhotos = [];
let currentPhotos = [];

const renderGallery = (photos) => {
  currentPhotos = photos;
  const oldGallery = document.querySelector('.gallery');
  if (oldGallery) oldGallery.remove();

  const gallery = Gallery(photos);
  app.append(gallery);
};

const loadInitial = async () => {
  initialPhotos = await getInitialPhotos();
  renderGallery(initialPhotos);
};

const header = Header(
  async (query) => {
    const photos = await searchPhotos(query);
    renderGallery(photos);
  },
  () => {
    renderGallery(initialPhotos);
  }
);

app.append(header);
loadInitial();

window.addEventListener('resize', () => {
  if (currentPhotos.length) {
    renderGallery(currentPhotos);
  }
});*/