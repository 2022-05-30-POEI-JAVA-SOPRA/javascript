// System.out.print(nom);
// String nom="Christian";

// # Problèmes avec `var`
// 1 . Hoisting : Déclarer en mémoir les variables avec `var`
console.log("1.Nom : ", nom);
var nom = "Christian";
console.log("2.Nom : ", nom);

// 2. Variables toujours globales
if (true) {
  var a = 6;
  console.log("`a` dans `IF`", a); //6
}
console.log("`a` après `IF` ", a);
