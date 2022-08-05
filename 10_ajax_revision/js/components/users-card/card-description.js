export function CardDescription(company) {
  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card__description", "mt05");
  cardDescription.innerText = company.catchPhrase;
  return cardDescription;
}
