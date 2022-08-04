import { UserCard } from "./components/user-card.js";
import { BASE_URL } from "./constants.js";

const usersCards = document.querySelector("#users");

axios.get(BASE_URL).then(function (response) {
  const users = response.data;
  for (let user of users) {
    const card = UserCard(user);
    usersCards.appendChild(card);
  }
});
