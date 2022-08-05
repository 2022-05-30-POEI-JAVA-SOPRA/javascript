import { UserCard } from "./components/users-card/user-card.js";
import { UsersService } from "./services/users.service.js";

class HomePage {
  constructor() {
    this.$usersCards = document.querySelector("#users");
    this.usersService = new UsersService();
    this.users = [];
  }

  async main() {
    this.users = await this.usersService.fetchUsers();
    for (let user of this.users) {
      const card = UserCard(user);
      this.$usersCards.appendChild(card);
    }
  }
}

const homePage = new HomePage();
homePage.main();
