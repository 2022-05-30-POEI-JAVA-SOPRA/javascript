var nomComplet = "Christian Lisangola";

function Article(designation, prixUHT, description, urlImage) {
  // {}
  this.designation = designation; // { designation : designation   }
  this.prixUHT = prixUHT; //{designation : designation, prixUHT:prixUHT }
  this.description = description; //{designation : designation, prixUHT:prixUHT,description: description  }
  this.urlImage = urlImage; //{designation : designation, prixUHT:prixUHT,description: description,urlImage:urlImage  }
  // return {designation : designation, prixUHT:prixUHT,description: description,urlImage:urlImage  }
}

// Ici c'est une mauvaise pratique parce qu'on ajout des attributs à l'objet glabol `window`
// A l'abscence de `new` `this` dans la fonction trouvera le `this` de window
const article = Article(
  "Macbook Pro 16 2021",
  3500,
  "Meilleur laptop du moment",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
);

console.log("Article : ", article);

// Avec le mot clé `new`, c'est un nouvel qui est construit par la fonction.
const article2 = new Article(
  "Macbook Pro 16 2021",
  3500,
  "Meilleur laptop du moment",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
);

console.log("Article2 : ", article2);
