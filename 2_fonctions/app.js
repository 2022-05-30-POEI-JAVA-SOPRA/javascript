// # Créer une fonctions qui retourne a somme de 2 nombres
// Runtime O(1)
function calculSomme(nombre1, nombre2) {
  if (typeof nombre1 !== "number" || typeof nombre2 !== "number") {
    throw new Error("Veuillez entrer des nombres valides");
  }
  return nombre1 + nombre2;
}

// # slugify
// ex : Macbook Pro 16 M1 Max => macbook pro 16 m1 max
// http://monsite.com/produits
// http://monsite.com/produits?id=macbook-pro-16-m1-max
// slugify("macbook pro","+") => macbook+pro
// slugify("macbook pro","*") => macbook*pro
// slugify("macbook pro","-") => macbook-pro
// slugify("macbook pro","_") => macbook_pro
function slugify(str, delimiter) {
  const strToLowerCase = str.toLowerCase();
  const strToArray = strToLowerCase.split(" ");
  return strToArray.join(delimiter);
}

// # Anonymous function expression
const slugifyV2 = function (str, delimiter) {
  const strToLowerCase = str.toLowerCase();
  const strToArray = strToLowerCase.split(" ");
  return strToArray.join(delimiter);
};

// # Arrow function
const slugifyV3 = (str, delimiter) => {
  const strToLowerCase = str.toLowerCase();
  const strToArray = strToLowerCase.split(" ");
  return strToArray.join(delimiter);
};

// Créer une fonction qui retourne l'inverse d'une chaine
const reverseString = function (str) {
  return str.split("").reverse().join("");
};

const reverseStringV2 = (str) => {
  return str.split("").reverse().join("");
};

const reverseStringV3 = (str) => str.split("").reverse().join("");

// rest parametre
// Runtime de :  O(n)
// Space complexity : O(n)
const somme = (...nombres) => {
  let resultat = 0;
  //   for (let i = 0; i < nombres.length; i++) {
  //     resultat += nombres[i];
  //   }

  //for..of
  for (let nombre of nombres) {
    resultat += nombre;
  }
  return resultat;
};

// somme(1,2,3,4)

// # Default parametre
const somme2 = (nombre1 = 0, nombre2 = 0) => nombre1 + nombre2;

// Runtime : O(1)
// space Complextiy : O(1)
function puissance(n, exposant) {
  const resultat = n ** exposant;
  return resultat;
}

// O(n2)
function sommeDiagonale2(matrice) {
  let somme = 0;
  for (let i = 0; i < matrice.length; i++) {
    for (let j = 0; j < matrice.length; j++) {
      if (i === j) {
        somme += matrice[i][j];
      }
    }
  }
  return somme;
}

// O(n)
function sommeDiagonale2(matrice) {
  let somme = 0;
  for (let i = 0; i < matrice.length; i++) {
    somme += matrice[i][i];
  }

  return somme;
}
