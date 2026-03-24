// Exer:1.1
const fiche = { prenom: "Bob", nom: "Dupont", age: 34, ville: "Lyon" };
// console.log(fiche.prenom+fiche.nom);
// 1.2
function getProp(obj, cle) {
  let key = null;
  const propreit = Object.keys(fiche).forEach((f) => {
    if (f == cle) {
      key = f;
    }
  });
  if (!key) {
    return "inconu";
  }
  return key;
}
// console.log(getProp(fiche,'salary'));
function renommerCle(obj, ancienne, nouvelle) {
  obj[nouvelle] = obj[ancienne];
  delete obj[ancienne];
  return obj;
}
// console.log(renommerCle(fiche,'ville','salary'));
// exer:2
const inventaire = {
  stylo: { prix: 1.5, stock: 200 },
  cahier: { prix: 3.5, stock: 85 },
  regle: { prix: 0.8, stock: 0 },
  compas: { prix: 8.5, stock: 12 },
};
// console.log(Object.keys(inventaire));

function sommeStock(obj) {
  var somme = 0;
  Object.values(obj).forEach((element) => {
    somme += element.stock * element.prix;
  });
  return somme;
}
// console.log(sommeStock(inventaire));
let array = Object.entries(inventaire);
// console.log(array)
var prixSeuls = Object.fromEntries(
  array.map(([u, { stock, prix }]) => {
    return [u, prix];
  }),
);
console.log(prixSeuls);
// exer:3
const commande = {
  id: "CMD-001",
  client: { nom: "Dupont", email: "dupont@mail.com" },
  total: 18.5,
  livree: false,
};
const { id, total, ...reste } = commande;
const { nom, ...nomReste } = commande.client;
const { total: montent, livree: estLivres } = commande;
console.log(montent, estLivres);
function resumeCommande(...commande) {
  return console.log(`Commande ${id} -${nom}- ${total} EUR`);
}
resumeCommande();
// exer:4
var catalogue = [
  { id: 1, nom: "Stylo bille", prix: 1.2, stock: 150 },
  { id: 2, nom: "Cahier A4", prix: 3.5, stock: 45 },
  { id: 3, nom: "Surligneur", prix: 2.1, stock: 80 },
  { id: 4, nom: "Post-it", prix: 3.8, stock: 60 },
  { id: 5, nom: "Ciseaux", prix: 6.3, stock: 20 },
];
var produit = {
  id,
  nom: "Ciseaux",
  prix: 6.3,
  stock: 20,
};

function ajouterProduit(catalogue,produit) {
  produit.id=catalogue.length + 1;
  catalogue.push(produit)
  return catalogue;
}
console.log(ajouterProduit(catalogue,produit));