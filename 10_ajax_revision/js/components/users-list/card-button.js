export function CardButton(id) {
  const viewButton = document.createElement("a");
  viewButton.classList.add("btn");
  viewButton.innerText = "Voir";
  viewButton.href = `./pages/details.html?id=${id}`;
  return viewButton;
}
