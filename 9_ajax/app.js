const usersList = document.querySelector("#users");

function CreateUserItem(user) {
  const userItem = document.createElement("li");
  const itemLink = document.createElement("a");
  itemLink.innerText = user.name;
  itemLink.href = `./details.html?id=${user.id}`;
  userItem.appendChild(itemLink);
  return userItem;
}

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    const users = response.data;
    for (let user of users) {
      usersList.appendChild(CreateUserItem(user));
    }
  });
