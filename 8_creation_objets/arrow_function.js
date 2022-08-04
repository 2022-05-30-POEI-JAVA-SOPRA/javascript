var equipe = ["Messi", "Et'o", "Thierry Henry", "Iniesta", "Xavi", "Busquet"];

function afficherEquipe() {
  this.equipe.forEach((joueur) => {
    console.log(joueur);
  });
}

var real = {
  equipe: ["C.Ronaldo", "Benzema", "Modric", "Ramos", "Casillas"],
  getEquipe: function () {
    return this.equipe;
  },
  getEquipe2: () => {
    return this.equipe;
  },
  getEquipe3: function () {
    // this = real
    return () => {
      return this.equipe;
    };
  },
  getEquipe4: function () {
    afficherEquipe.bind(this)();
  },
};
