const fruits = ["pomme", "banane", "orange", "cassis"];

// Ecrire un code qui permet de mettre au pluriel les noms des fruits

//#1.Boucle for classique
const fruitsPluriel = [];

for (let i = 0; i < fruits.length; i++) {
  // si i=0, fruits[i] = pomme + s = pommes
  fruitsPluriel.push(fruits[i] + "s");
}

//#2.Boucle for of
const fruitsPluriel2 = [];

for (let fruit of fruits) {
  fruitsPluriel2.push(fruit + "s");
}

//#3. Méthode .forEach()
const fruitsPluriel3 = [];
fruits.forEach(function (fruit) {
  fruitsPluriel3.push(fruit + "s");
});

//#4. Méthode .map()
// 1 - Créer un tableau en mémoire
// 2 - Pour chaque itération dans .map(), insérer la valeur retourné
//     dans le tableau du point(1)
// 3 - A la fin de la sa boucle, la variable `fruitsPlurielMap` reçoit le nouveau tableau
const fruitsPlurielMap = fruits.map(function (fruit) {
  if (fruit.endsWith("s")) {
    return fruit;
  }
  return fruit + "s";
});

// map() : Créer des slugs
const articles = [
  "Mabook Pro 16",
  "Iphone 13 Pro Max",
  "Huawei Honor 40",
  "Xiaomi Redmi Note 10",
];

const slugs = articles.map(function (article) {
  return article.toLowerCase().split(" ").join("-");
});

const slugsV2 = articles.map((article) =>
  article.toLowerCase().split(" ").join("-")
);


// map() : Elever des nombres au carré
const nombres = [1, 2, 3, 45, 6];
const nombresAuCarre = nombres.map((nombre) => Math.pow(nombre, 2));
