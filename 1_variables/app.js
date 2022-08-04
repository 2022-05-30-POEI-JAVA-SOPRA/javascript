// 1 . Déclarations avec var

// # Calcul de la somme
var nombre1 = 45;
var nombre2 = 55;
var somme = nombre1 + nombre2;
console.log(somme);
console.log(`${nombre1} + ${nombre2} = ${somme}`); // 45 + 55 = 100

// # Identité : sans prompt
// var nom = "Lisangola";
// var prenom = "Christian";
// var age = 56;
// console.log(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);

// # Identité :Saisie avec prompt
var nom = prompt("Votre nom : ");
var prenom = prompt("Votre prenom : ");
var age = prompt("Votre age : ");
alert(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);

// Exo 1

var nom = prompt("Votre nom : ");
var prenom = prompt("Votre prenom : ");
var age = prompt("Votre age : ");
alert(`Votre nom est ${prenom} ${nom}, vous avez ${age} ans.`);
