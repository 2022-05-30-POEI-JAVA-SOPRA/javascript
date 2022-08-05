import { BASE_URL } from "../constants.js";

export class UsersService {
  constructor() {
    this.url = "/users";
  }

  fetchUsers() {
    return axios.get(BASE_URL + this.url).then(function (response) {
      return response.data;
    });
  }

  fetchUserById(id) {
    return axios.get(BASE_URL + this.url + "/" + id).then(function (response) {
      return response.data;
    });
  }
}
