const nombres = [2, 5, 67, 8, 56, 19, 33];

// Mauvaise utilisation de map
const nombresSuperieursA20Bad = nombres.map(function (nombre) {
  if (nombre >= 20) {
    return nombre;
  }
});

// Utilisation de filter

const nombresSuperieursA20Good = nombres.filter(function (nombre) {
  return nombre >= 20;
});

const fruits = ["oranges", "mangues", "goyave", "pomme", "citron"];
const fruitsSingulier = fruits.filter((fruit) => !fruit.endsWith("s"));
const fruitsSingulier2 = fruits.filter(function (fruit) {
  return !fruit.endsWith("s");
});
