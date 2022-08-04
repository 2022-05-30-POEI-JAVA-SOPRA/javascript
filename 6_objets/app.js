const article1 = {
  nom: "Macbook Pro 16 2021",
  fabricant: "Apple",
  prix: 3500,
  description: "Meilleur laptop du moment",
  quatiteStock: 670,
};

console.log(article1);

// Accéder aux attributs
// console.log("nom  : ", article1.nom);
// console.log("Fabricant  : ", article1.fabricant);
// console.log("Prix  : ", article1.prix, "€");

// Modifier les attributs
article1.nom = "Macbook Pro 13 2020 M1";

//JSON : Javascript Object Notation

const articles = [
  {
    id: 1,
    nom: "Macbook Pro 16 2021",
    fabricant: "Apple",
    prix: 3500,
    description: "Meilleur laptop du moment",
    quatiteStock: 670,
  },
  {
    id: 2,
    nom: "Asus Rog",
    fabricant: "Asus",
    prix: 4000,
    description: "Meilleur laptop pour les graphistes",
    quatiteStock: 45,
  },
  {
    id: 3,
    nom: "Iphone 13 Pro Max",
    fabricant: "Apple",
    prix: 1600,
    description: "sdfdklf",
    quatiteStock: 5,
  },
];

console.log("Liste des articles\n=======================");
for (let article of articles) {
  console.log("nom  : ", article.nom);
  console.log("Fabricant  : ", article.fabricant);
  console.log("Prix  : ", article.prix, "€");
  console.log("\n");
}

// Changer le squelette du tableau
const articles2 = articles.map(function (article) {
  return {
    id: article.id,
    designation: `${article.fabricant} ${article.nom}`,
    prix: `${article.prix} €`,
  };
});

// Destructuration
const articles3 = articles.map(function ({ id, fabricant, nom, prix }) {
  return {
    id, //id:id
    designation: `${fabricant} ${nom}`,
    prix: `${prix} €`,
  };
});

const articles4 = articles.map(({ id, fabricant, nom, prix }) => ({
  id,
  designation: `${fabricant} ${nom}`,
  prix: `${prix} €`,
}));
