export function CardImage(id, name) {
  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = `https://robohash.org/${id}`;
  image.alt = name;
  return image;
}
