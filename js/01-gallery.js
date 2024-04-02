import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const items = galleryItems.map(({ original, preview, description }) => {
  const galleryLink = document.createElement("a");
  galleryLink.className = "gallery__link";
  galleryLink.href = original;

  const galleryImage = document.createElement("img");
  galleryImage.className = "gallery__image";
  galleryImage.src = preview;
  galleryImage.setAttribute("title", description);
  galleryImage.alt = description;
  galleryLink.append(galleryImage);
  return galleryLink;
});

gallery.append(...items);

const instance = basicLightbox.create(`
    <img src="/01-gallery.html" width="800" height="600">
`);

instance.show();
