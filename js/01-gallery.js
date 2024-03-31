import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
function createGallery(listImage) {
  const gallery = listImage
    .map(
      (image) =>
        `<li> <div><a href=""><img class="gallery__image" 
        src=${image.preview} data-source=${image.original} 
        alt="${image.description}"></a></div> </li>`
    )
    .join("");
  return gallery;
  //gallery.insertAdjacentHTML("beforeend", gallery);
}
//createGallery(images);
