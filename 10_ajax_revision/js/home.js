const usersCards = document.querySelector("#users");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    const users = response.data;
    for (let user of users) {
      // Création du parent
      const card = document.createElement("div");
      card.classList.add("card");

      //   création du parent de l'image
      const imageBox = document.createElement("div");
      imageBox.classList.add("card__image-box");

      //   création de l'image
      const image = document.createElement("img");
      image.classList.add("card__image");
      image.src = `https://robohash.org/${user.id}`;
      image.alt = user.name;

      //   ajouter l'image au parent
      imageBox.appendChild(image);

      //   Création du titre
      const cardTitle = document.createElement("p");
      cardTitle.classList.add("card__title", "mt05");
      cardTitle.innerText = user.name;

      //création de la description
      const cardDescription = document.createElement("p");
      cardDescription.classList.add("card__description", "mt05");
      cardDescription.innerText = user.company.catchPhrase;

      //   création du bouton
      const viewButton = document.createElement("button");
      viewButton.classList.add("btn");
      viewButton.innerText = "Voir";

      //
      card.append(imageBox, cardTitle, cardDescription, viewButton);

      usersCards.appendChild(card);
    }
  });

//   Create User card
{
  /* <div class="card">
  <div class="card__image-box">
    <img
      class="card__image"
      src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2668&q=80"
      alt="mon image"
    />
  </div>
  <p class="card__title mt05">Cute kitty</p>
  <p class="card__description mt05">This is a very cute kitty.</p>
  <p class="card__price mt05">50€</p>
  <button class="btn">Voir</button>
</div>; */
}
