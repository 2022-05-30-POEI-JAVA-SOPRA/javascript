import { BASE_URL } from "../constants.js";
import { Api } from "./api.config.js";

export class UsersService {
  constructor() {
    this.url = "/users";
  }

  fetchUsers() {
    return Api.get(this.url).then(function (response) {
      return response.data;
    });
  }

  fetchUserById(id) {
    return Api.get(this.url + "/" + id).then(function (response) {
      return response.data;
    });
  }
}
