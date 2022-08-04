// Création d'un tableau vide
const fruits = [];
// Inserer des données à la fin du tableau
// .push(element) : Retourne la nouvelle taille du tableau après l'insertion
fruits.push("Pomme");
fruits.push("Banane");
fruits.push("Orange");

// Création et initialisation
const noms = ["Christian", "Steven", "Maeva", "Jordan", "Morgane"];
noms.push("Zakaria");
noms.push("Ludovic");
noms.push("Marion");
noms.push("Anouar");
console.log("Noms : ", noms);
console.log("Fruits : ", fruits);

// Acces
fruits[0]; //Pomme
fruits[2]; //Orange
noms[1]; //Steven
noms[4]; //Morgane

// #pop() : Retirer un element à la fin du tableau et le retourne
fruits.pop(); //ceci va retirer le dernier element du tableau("orange")

// #shift() : Retirer un element au debut du tableau et le retoune
noms.shift(); //Ceci va retirer le premier element du tableau

// #unshift() : Ajouter un element au debut du tableau
noms.unshift("Zidane");
