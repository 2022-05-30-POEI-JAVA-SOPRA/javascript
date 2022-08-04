import { UserDetails } from "./components/user-details.js";
import { BASE_URL } from "./constants.js";

const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");

const userDetails = document.querySelector("#user-details");

axios.get(`${BASE_URL}/${id}`).then(function (response) {
  console.log(response);
  const user = response.data;
  userDetails.innerHTML = UserDetails(user);
});
