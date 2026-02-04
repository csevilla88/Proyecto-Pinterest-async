import { Card } from './Card.js';

export const Gallery = (cards) => {
    let gallery = document.querySelector('.gallery');
    if (gallery) gallery.remove();

    gallery = document.createElement('section');
    gallery.className = 'gallery';

    for (const card of cards) {
        const cardElement = Card(card);
        gallery.append(cardElement);
    }
    const app = document.querySelector('#app');
    app.append(gallery);
}






