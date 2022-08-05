import { CardButton } from "./card-button.js";
import { CardDescription } from "./card-description.js";
import { CardImageWrapper } from "./card-image.js";
import { CardTitle } from "./card-title.js";

export function UserCard(user) {
  const { id, name, company } = user;
  const card = document.createElement("div");
  card.classList.add("card");

  const imageBox = CardImageWrapper(id, name);

  const cardTitle = CardTitle(name);

  const cardDescription = CardDescription(company);

  const viewButton = CardButton(id);

  card.append(imageBox, cardTitle, cardDescription, viewButton);

  return card;
}
