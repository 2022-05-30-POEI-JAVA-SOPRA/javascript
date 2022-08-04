const urlParams = new URLSearchParams(location.search);
const id = urlParams.get("id");

const userDetails = document.querySelector("#data");
const nameTitle = document.querySelector("#name");

function CreateDetailsCard(user) {
  return ` <p><b>Email :${user.email} </b></p>
    <p><b>Phone number : ${user.phone}</b></p>
    <p><b>Website : </b> ${user.website}</p>`;
}

axios
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(function (response) {
    const user = response.data;
    nameTitle.innerText = user.name;
    userDetails.innerHTML = CreateDetailsCard(user);
  });
