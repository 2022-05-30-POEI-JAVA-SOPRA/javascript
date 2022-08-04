function Article(designation, prixUHT, description, urlImage) {
  this.designation = designation;
  this.prixUHT = prixUHT;
  this.description = description;
  this.urlImage = urlImage;
}

Article.prototype.getPrixTTC = function () {
  return this.prixUHT * 1.21;
};

const article = new Article(
  "Macbook Pro 16 2021",
  3500,
  "Meilleur laptop du moment",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
);

const article2 = new Article(
  "Huawei Mate 20",
  800,
  "Parfait",
  "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
);

