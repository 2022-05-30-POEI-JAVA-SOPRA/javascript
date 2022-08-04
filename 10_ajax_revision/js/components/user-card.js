export function UserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  //   création du parent de l'image
  const imageBox = document.createElement("div");
  imageBox.classList.add("card__image-box");

  //   création de l'image
  const image = document.createElement("img");
  image.classList.add("card__image");
  image.src = `https://robohash.org/${user.id}`;
  image.alt = user.name;

  //   ajouter l'image au parent
  imageBox.appendChild(image);

  //   Création du titre
  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card__title", "mt05");
  cardTitle.innerText = user.name;

  //création de la description
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description", "mt05");
  cardDescription.innerText = user.company.catchPhrase;

  //   création du bouton
  const viewButton = document.createElement("button");
  viewButton.classList.add("btn");
  viewButton.innerText = "Voir";

  //
  card.append(imageBox, cardTitle, cardDescription, viewButton);

  return card;
}
