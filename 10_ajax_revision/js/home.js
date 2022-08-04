import { UserCard } from "./components/user-card.js";

const usersCards = document.querySelector("#users");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    const users = response.data;
    for (let user of users) {
      const card = UserCard(user);
      usersCards.appendChild(card);
    }
  });
