export function CardTitle(name) {
  const cardTitle = document.createElement("p");
  cardTitle.classList.add("card__title", "mt05");
  cardTitle.innerText = name;
  return cardTitle;
}
