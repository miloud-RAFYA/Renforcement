var fruits = ["pomme", "banne", "orange"];
fruits.push("fris");
let personne = {
  nom: "Alice",
  age: "25",
  ville: "Paris",
};
// let animal = ["chat", "chien", "lapin", "tortue"];
// for (let i = 0; i < animal.length; i++) {
//   console.log(animal[i]);
// }
let courses=[
    {
        "nom":"Pain",
        "prix":150,
    }
    ,
    {
        "nom":"Lait",
        "prix":250,
    }
];
var prixTotal=0;
for(let i=0 ;i<courses.length;i++){
           prixTotal+=courses[i].prix;
}
// console.log(prixTotal);


let produit={
    "nom":"cafe",
    "prix":150,
    "categories":"boisson",
}
let lest="Le produit"+produit.nom +"coûte "+produit.prix+" euros. (catégorie :"+produit.categories+")";
console.log(lest);
