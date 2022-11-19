// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryItemsEl = document.querySelector(".gallery");

function createGalleryItem(items) {
    return items.map(item =>
        `<a class="gallery__item" href=${item.original}>
             <img class="gallery__image" src=${item.preview} alt=${item.description} />
         </a> `)
        .join('');
};
    

const addGalleryItem = createGalleryItem(galleryItems);

galleryItemsEl.innerHTML = addGalleryItem;

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });  