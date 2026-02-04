export const Card = (photo) => {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.className = 'card_img';
  img.src = photo.urls.regular;
  img.alt = photo.alt_description || 'Photo';

  const user = document.createElement('div');
  user.className = 'card_user';

  const avatar = document.createElement('img');
  const classColor = [
  'border-red',
  'border-green',
  'border-blue',
  'border-purple',
  'border-orange',
  'border-pink',
  'border-yellow'
  ];
  const randomColor = classColor[Math.floor(Math.random() * classColor.length)];

  avatar.className = randomColor + ' card_img_user';
  avatar.style.setProperty('--avatar-color', `${photo.color}`);
  avatar.src = photo.user.profile_image.large;
  avatar.alt = photo.user.name;

  const userName = document.createElement('span');
  userName.textContent = photo.user.name;

  const dateUpload = document.createElement('div');
  dateUpload.className = 'date-upload';
  const uploadIcon = document.createElement('i');
  const date = document.createElement('span');
  uploadIcon.className = 'fa-solid fa-upload';
  dateUpload.append(uploadIcon);
  date.textContent = new Date(photo.user.updated_at).toLocaleDateString();
  dateUpload.append(date);

  const cardActives = document.createElement('div');
  cardActives.className = 'card_actives';
  
  const visitButton = document.createElement('button');
  visitButton.className = 'visit-button';
  visitButton.textContent = 'Visitar';

  const likes = document.createElement('div');
  likes.className = 'likes';
  const likeIcon = document.createElement('i');
  likeIcon.className = 'fa-solid fa-heart';
  const textLikes = document.createElement('span');
  textLikes.textContent = photo.likes;
  likes.append(likeIcon,textLikes);

  const camera = document.createElement('div');
  camera.className = 'camera';
  const cameraIcon = document.createElement('i');
  cameraIcon.className = 'fa-solid fa-camera';
  const textCamera = document.createElement('span');
  console.log("PHOTO EXIF IN CARD:", photo);
  textCamera.textContent = photo.user.total_photos;
  camera.append(cameraIcon,textCamera);

  visitButton.addEventListener('click', (e) => {
    e.stopPropagation();
    window.open(photo.links.html, '_blank');
  });

  cardActives.append(likes,camera ,visitButton);
  card.addEventListener('click', () => {
    card.classList.toggle('active');
    if(card.classList.contains('active')){ 
        card.append(cardActives); 
    } else { 
        cardActives.remove(); 
    }
  });

  
  user.append(avatar, userName, dateUpload);
  card.append(img, user);

  return card;
};


