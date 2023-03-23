import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

galleryEl.addEventListener('click', pictureClick)
galleryEl.insertAdjacentHTML('afterbegin', galleryItem(galleryItems));

function galleryItem(galleryItems) {
    return galleryItems.map(({description, original, preview}) => {
    return `<li class="gallery__item">

                <a class="gallery__link" href="large-image.jpg">
                        <img
                            class="gallery__image"
                            src="${preview}"
                            data-source="${original}"
                            alt="${description}"
                        />
                </a>
            </li> `
    }).join('');
};

function pictureClick(event) { 
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') { 
        return
    }
     
    const imgElLink = event.target.dataset.source;

    handleModalWindow(imgElLink);
};
function handleModalWindow(link) { 
    const instance = basicLightbox.create(`<img src="${link}">`);
    instance.show()

    document.addEventListener('keydown', event => {
        if (event.code !== 'Escape') {
            return;
        }
        instance.close();
        document.removeEventListener('keydown', event);
    })
};

