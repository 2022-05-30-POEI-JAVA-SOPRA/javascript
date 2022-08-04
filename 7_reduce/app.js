const nombres = [1, 2, 3, 34, 45, 56, 6];

// # calcul de la somme des items du tableau
// # For of
let somme = 0;
for (let nombre of nombres) {
  somme += nombre;
}
console.log("Somme for..of : ", somme);

// # ForEach
somme = 0;
nombres.forEach((nombre) => (somme += nombre));
console.log("Somme forEach : ", somme);

//  # reduce
somme = 0;
somme = nombres.reduce(function (accumulateur, nombre) {
  return accumulateur + nombre;
}, 0);
console.log("Somme reduce : ", somme);
