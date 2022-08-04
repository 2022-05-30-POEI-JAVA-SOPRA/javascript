import { BASE_URL } from "./constants.js";

const urlParams = new URLSearchParams(location.search);

const id = urlParams.get("id");

axios.get(`${BASE_URL}/${id}`).then(function (response) {
  console.log(response.data);
});
