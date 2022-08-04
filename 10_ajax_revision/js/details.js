const urlParams = new URLSearchParams(location.search);

const id = urlParams.get("id");

axios
  .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then(function (response) {
    console.log(response.data);
  });
