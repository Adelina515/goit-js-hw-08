
  // Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryUl = document.querySelector(".gallery");
const galleryMarkupLi = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>
    </li>`).join(" ");
    galleryUl.insertAdjacentHTML("afterbegin", galleryMarkupLi);
galleryUl.addEventListener('click', handleModalOpen);

function handleModalOpen(event) {
    event.preventDefault();
    const currentLi = event.target;

     if (currentLi.nodeName !== "IMG") {
    return;
     }
    const lightbox = new SimpleLightbox('.gallery .gallery__link', {
        captions: true,
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
});
}; 