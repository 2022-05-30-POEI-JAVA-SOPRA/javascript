import { UserCard } from "./components/users-list/user-card.js";
import { UsersList } from "./components/users-list/users-list.js";
import { UsersService } from "./services/users.service.js";

class HomePage {
  constructor() {
    this.usersService = new UsersService();
    this.users = [];
  }

  async main() {
    this.users = await this.usersService.fetchUsers();
    const usersList = new UsersList(this.users);
    usersList.render();
  }
}

const homePage = new HomePage();
homePage.main();
