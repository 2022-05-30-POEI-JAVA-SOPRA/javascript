function CardImage(id, name) {
  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = `https://robohash.org/${id}`;
  image.alt = name;
  return image;
}

export function CardImageWrapper(id, name) {
  const imageBox = document.createElement("div");
  imageBox.classList.add("card__image-box");

  const cardImage = CardImage(id, name);
  imageBox.appendChild(cardImage);

  return imageBox;
}
