import { CardButton } from "./card-button.js";
import { CardDescription } from "./card-description.js";
import { CardImage } from "./card-image.js";
import { CardTitle } from "./card-title.js";

export function UserCard(user) {
  const { id, name, company } = user;
  const card = document.createElement("div");
  card.classList.add("card");

  const imageBox = document.createElement("div");
  imageBox.classList.add("card__image-box");

  const cardImage = CardImage(id, name);
  imageBox.appendChild(cardImage);

  const cardTitle = CardTitle(name);

  const cardDescription = CardDescription(company);

  const viewButton = CardButton(id);

  card.append(imageBox, cardTitle, cardDescription, viewButton);

  return card;
}
