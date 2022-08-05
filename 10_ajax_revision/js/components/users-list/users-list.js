import { UserCard } from "./user-card.js";

export class UsersList {
  constructor(users) {
    this.$usersCards = document.querySelector("#users");
    this.users = users;
  }

  render() {
    for (let user of this.users) {
      const card = UserCard(user);
      this.$usersCards.appendChild(card);
    }
  }
}
