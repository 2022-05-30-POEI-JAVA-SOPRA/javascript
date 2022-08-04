// System.out.print(nom);
// String nom="Christian";

// # Avantages avec `let`
// Ne subit le `hoisting` et permet de créer des varianles locales
// console.log("1.Nom : ", nom); va génerer une erreur
let nom = "Christian";
console.log("2.Nom : ", nom);

// 2. Variables toujours globales
if (true) {
  let a = 6;
  console.log("`a` dans `IF`", a); //6
}
// console.log("`a` après `IF` ", a); #erreur
