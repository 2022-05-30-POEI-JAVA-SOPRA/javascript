const noms = [
  "Jean Zozor Toto",
  "Jordan Prevot",
  "Mickael Veril",
  "Nouah Menadjlia",
  "Christian Lisangola",
  "Steven Dumortier",
  "Valentin Payet",
  "Mansour Achour",
  "Christian Lasangala",
];

const nomARechercher = prompt("Entrez le nom à rechercher : ");

const nom = noms.find(function (nom) {
  return nom.startsWith("Chris");
});
