// Q:1
let catalogue = [
  {
    id: 1,
    nom: "Stylo bille bleu",
    cat: "ecriture",
    prix: 1.2,
    stock: 150,
    note: 4.2,
  },
  {
    id: 2,
    nom: "Stylo bille rouge",
    cat: "ecriture",
    prix: 1.2,
    stock: 0,
    note: 4.0,
  },
  {
    id: 3,
    nom: "Stylo gel noir",
    cat: "ecriture",
    prix: 2.5,
    stock: 60,
    note: 4.7,
  },
  {
    id: 4,
    nom: "Cahier A4 200p",
    cat: "papier",
    prix: 5.5,
    stock: 45,
    note: 4.8,
  },
  {
    id: 5,
    nom: "Cahier A5 100p",
    cat: "papier",
    prix: 3.2,
    stock: 80,
    note: 4.3,
  },
  {
    id: 6,
    nom: "Bloc-notes A5",
    cat: "papier",
    prix: 2.8,
    stock: 30,
    note: 3.9,
  },
  {
    id: 7,
    nom: "Surligneur jaune",
    cat: "ecriture",
    prix: 1.8,
    stock: 0,
    note: 4.5,
  },
  {
    id: 8,
    nom: "Surligneur rose",
    cat: "ecriture",
    prix: 1.8,
    stock: 20,
    note: 4.3,
  },
  {
    id: 9,
    nom: "Ciseaux bureau",
    cat: "bureau",
    prix: 6.5,
    stock: 8,
    note: 3.7,
  },
  { id: 10, nom: "Agrafeuse", cat: "bureau", prix: 9.9, stock: 5, note: 4.1 },
  {
    id: 11,
    nom: "Post-it jaunes",
    cat: "papier",
    prix: 4.2,
    stock: 60,
    note: 4.6,
  },
  {
    id: 12,
    nom: "Agenda 2025",
    cat: "agenda",
    prix: 12.0,
    stock: 15,
    note: 4.7,
  },
  {
    id: 13,
    nom: "Marqueur permanent",
    cat: "ecriture",
    prix: 3.1,
    stock: 35,
    note: 4.4,
  },
  { id: 14, nom: "Regle 30cm", cat: "bureau", prix: 1.5, stock: 90, note: 3.8 },
  {
    id: 15,
    nom: "Compas de precision",
    cat: "bureau",
    prix: 8.9,
    stock: 12,
    note: 4.6,
  },
];
// create
const nouveauProduit = {
  nom: "Compas de precision",
  cat: "table",
  prix: 3.9,
  stock: 2,
  note: 4.6,
};
function ajouterproduit(catalogue, produit) {
  const newId = Math.max(...catalogue.map((p) => p.id)) + 1;
  const newCatalague = [...catalogue, { id: newId, ...nouveauProduit }];
  return newCatalague;
}
ajouterproduit(catalogue, nouveauProduit);
// nouveauProduit.id=newId;
// catalogue.push(nouveauProduit);
// console.log(newCatalague);
// update
const modifications = {
  nom: "Compas de precision",
  cat: "chiese",
  prix: 10.9,
  stock: 2,
  note: 8.6,
};
function mettreAJour(catalogue, id, modifications) {
  const cat2 = catalogue.map((p) =>
    p.id === id ? { ...p, ...modifications } : p,
  );
  return cat2;
}
const id = 2;
mettreAJour(catalogue, id, modifications);
// delte
function supprimerProduit(catalogue, id) {
  const cat3 = catalogue.filter((p) => p.id != 15);
  return cat3;
}
supprimerProduit(catalogue, id);
// console.log(cat3);
function getProduitById(catalogue,id) {
    const produit = catalogue.find(p=>p.id === id)||"null";
    return produit;
}
console.log(getProduitById(catalogue, 11));
