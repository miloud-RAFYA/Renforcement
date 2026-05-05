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

function getAvailable(catalogue) {
  return catalogue.filter((t) => {
    return t.stock > 0;
  });
}
function getprodactByCatalogue(catalogue, cat) {
  return catalogue.filter((t) => {
    return t.cat === cat;
  });
}
var Orders = [];
function placeOrder(id, quantite, catalogue) {
  const index = catalogue.findIndex((t) => (t.id = id));
  const produit = catalogue[index];
  if (produit && produit.stock > quantite) {
    const s = produit.stock - quantite;
    catalogue.splice(index, 1, { ...produit, stock: s });
    Orders.push({ ...produit, stock: quantite });
  }
  return Orders;
}
function topThreProduct(catalogue) {
  const troisMax = sort((a, b) => a, b).slic;
  return troisMax;
}
// console.log(placeOrder(1,15,catalogue))
// console.log(catalogue)
function inverse(str) {
  let inverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverseStr = inverseStr + str[i];
  }
  return inverseStr;
}
// console.log(inverse('bonjour'));

function compteVyelle(str) {
  let lengthVoyelle = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "y", "u", "i", "o"].includes(str[i])) {
      lengthVoyelle++;
    }
  }
  return lengthVoyelle;
}
// console.log(compteVyelle('javascript'));
function majuscule(str) {
  for (let i = 0; i < str.length; i++) {
    if (i == 0 || str[i] == " ") {
      console.log(str[i]);
    }
  }
}
// majuscule('bonjour tout le monde');

function palinodrome(str) {
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      index = 1;
    }
  }
  if (index != 1) {
    return true;
  } else {
    return false;
  }
}
// console.log(palinodrome('radar'));
// console.log(palinodrome('hello'));

function maxNb(array) {
  let mx = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mx) {
      mx = array[i];
    }
  }
  return mx;
}
// console.log(maxNb([93, 7, 22, 9, 5]));

function supprimerDoublon(array) {
  let ar = [];
  for (let i = 0; i < array.length; i++) {
    if (!ar.includes(array[i])) {
      ar.push(array[i]);
    }
  }
  return ar;
}
// console.log(supprimerDoublon([4,2,2,3,4,4]))

function triTableau(array) {
  let temp = array[0];
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
// console.log(triTableau([5,1,4,2]))
function nonRepitition(array) {
  let rep = [];
  for (let i = 0; i < array.length; i++) {
    var a = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        a++;
      }
    }
    if (a != 2) {
      rep.push(array[i]);
    }
  }
  return rep;
}
// console.log(nonRepitition([5,1,4,2,2]))

function nbRepitipition(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let a = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] == array[j]) {
        a++;
        obj[array[i]] = a;
      }
    }
  }
  return obj;
}
// console.log(nbRepitipition([5,1,4,2,2]))

function str(str1, str2) {
  let s = "";
  for (let i = 0; i < str1.length; i++) {
    let a = 0;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) {
        a += 1;
        str2[j] = str2[j + 1];
      }
    }
    // console.log(a);
    if (a != 1 || a > 1) {
      s = s + str1[i];
    }
  }
  return s;
}
// console.log(str("Bonjour", "Bravo"));
const projects = [
  {
    name: "Zakaria Lafhiel",
    projects: [
      {
        name: "Smart Organizer",
        skills: "Laravel,MySQL,PHP,Tailwind CSS",
        description: "Collaborative resource management with points system.",
      },
      {
        name: "EasyColoc",
        skills: "React.js,Node.js,Express,MongoDB",
        description: "Expense tracking and debt reconciliation for roommates.",
      },
    ],
  },
  {
    name: "Miloud",
    projects: [
      {
        name: "CareerLink Platform",
        skills: "PHP,MVC,JavaScript,PostgreSQL",
        description:
          "Recruitment platform with job posting and candidate management.",
      },
      {
        name: "E-Learning Portal",
        skills: "React,Firebase,Material-UI",
        description:
          "Online courses platform with real-time progress tracking.",
      },
    ],
  },
  {
    name: "Mohamed",
    projects: [
      {
        name: "Library Management System",
        skills: "Laravel,Alpine.js,Livewire,SQL",
        description:
          "Migration of legacy library system to a modern framework.",
      },
      {
        name: "Real-time Chat App",
        skills: "Socket.io,Node.js,React",
        description: "Instant messaging application with private rooms.",
      },
    ],
  },
];
function skills(array) {
  return reduce((acc, v) => {
    v[1].forEach((e) => {
      let sk = e.skills.split(",");
      sk.forEach((s) => {
        if (!acc.includes(s)) {
          acc = s;
        }
      });
    });
    return acc;
  }, []);
}
function skills1(array) {
  let sk = [];
  array.forEach((e) => {
    e.projects.forEach((s) => {
      let skills = s.skills.split(",");
      skills.forEach((d) => {
        if (!sk.includes(d)) {
          sk.push(d);
        }
      });
    });
  });
  return sk;
}
// console.log(skills1(projects));
// Construire un objet groupé par catégorie. Pour chaque catégorie calculer :
//      — nbTotal        : nombre de véhicules dans la catégorie
//      — nbDisponibles  : nombre disponibles
//      — prixMoyen      : moyenne des prix_jour (tous véhicules, disponibles ou non)
//      — noteMoyenne    : moyenne des notes, arrondie à 1 décimale

const flotte = [
  {
    id: 1,
    marque: "Toyota",
    modele: "Yaris",
    cat: "citadine",
    prix_jour: 35,
    km: 42000,
    note: 4.2,
    disponible: true,
  },
  {
    id: 2,
    marque: "Toyota",
    modele: "Corolla",
    cat: "berline",
    prix_jour: 55,
    km: 28000,
    note: 4.6,
    disponible: true,
  },
  {
    id: 3,
    marque: "Renault",
    modele: "Clio",
    cat: "citadine",
    prix_jour: 30,
    km: 75000,
    note: 3.8,
    disponible: false,
  },
  {
    id: 4,
    marque: "Renault",
    modele: "Megane",
    cat: "berline",
    prix_jour: 50,
    km: 15000,
    note: 4.8,
    disponible: true,
  },
  {
    id: 5,
    marque: "Peugeot",
    modele: "208",
    cat: "citadine",
    prix_jour: 32,
    km: 60000,
    note: 4.0,
    disponible: true,
  },
  {
    id: 6,
    marque: "Peugeot",
    modele: "3008",
    cat: "SUV",
    prix_jour: 80,
    km: 22000,
    note: 4.7,
    disponible: true,
  },
  {
    id: 7,
    marque: "BMW",
    modele: "Serie 3",
    cat: "berline",
    prix_jour: 110,
    km: 8000,
    note: 4.9,
    disponible: true,
  },
  {
    id: 8,
    marque: "BMW",
    modele: "X3",
    cat: "SUV",
    prix_jour: 130,
    km: 5000,
    note: 4.8,
    disponible: false,
  },
  {
    id: 9,
    marque: "Ford",
    modele: "Kuga",
    cat: "SUV",
    prix_jour: 75,
    km: 38000,
    note: 4.3,
    disponible: true,
  },
  {
    id: 10,
    marque: "Ford",
    modele: "Fiesta",
    cat: "citadine",
    prix_jour: 28,
    km: 90000,
    note: 3.6,
    disponible: true,
  },
  {
    id: 11,
    marque: "Tesla",
    modele: "Model 3",
    cat: "berline",
    prix_jour: 95,
    km: 12000,
    note: 4.9,
    disponible: true,
  },
  {
    id: 12,
    marque: "Tesla",
    modele: "Model Y",
    cat: "SUV",
    prix_jour: 115,
    km: 6000,
    note: 5.0,
    disponible: true,
  },
  {
    id: 13,
    marque: "Volkswagen",
    modele: "Golf",
    cat: "berline",
    prix_jour: 58,
    km: 45000,
    note: 4.1,
    disponible: false,
  },
  {
    id: 14,
    marque: "Volkswagen",
    modele: "Tiguan",
    cat: "SUV",
    prix_jour: 88,
    km: 19000,
    note: 4.5,
    disponible: true,
  },
  {
    id: 15,
    marque: "Hyundai",
    modele: "Tucson",
    cat: "SUV",
    prix_jour: 70,
    km: 31000,
    note: 4.4,
    disponible: true,
  },
];

function categ(array) {
  let obj1 = {};
  array.forEach((e) => {
    obj1[e.cat] = 0;
  });
  Object.keys(obj1).forEach((k) => {
    let obj = { nbTotal: 0, nbDisponibles: 0, prixMoyen: 0, noteMoyenne: 0 };
    obj1[k] = obj;
    array.forEach((f) => {
      if (k == f.cat) {
        obj1[k].nbTotal += 1;
        if (f.disponible) {
          obj1[k].nbDisponibles += 1;
        }
        obj1[k].prixMoyen += f.prix_jour / obj.nbTotal;
        obj1[k].noteMoyenne += f.note / obj.nbTotal;
      }
    });
  });
  return obj1;
}
// console.log(categ(flotte));

const directors = [
  {
    name: "Christopher Nolan",
    followers: 980000,
    movies: [
      { title: "Inception", views: 520000, reviews: 1800 },
      { title: "Interstellar", views: 670000, reviews: 2300 },
      { title: "The Dark Knight", views: 890000, reviews: 3100 },
    ],
  },
  {
    name: "Quentin Tarantino",
    followers: 750000,
    movies: [
      { title: "Pulp Fiction", views: 430000, reviews: 1500 },
      { title: "Kill Bill", views: 310000, reviews: 980 },
    ],
  },
  {
    name: "Greta Gerwig",
    followers: 420000,
    movies: [
      { title: "Barbie", views: 990000, reviews: 4200 },
      { title: "Lady Bird", views: 215000, reviews: 760 },
      { title: "Little Women", views: 180000, reviews: 620 },
    ],
  },
  {
    name: "Denis Villeneuve",
    followers: 610000,
    movies: [
      { title: "Dune", views: 780000, reviews: 2900 },
      { title: "Arrival", views: 390000, reviews: 1400 },
    ],
  },
];
// Challenge 1 : Afficher chaque réalisateur avec le total de vues cumulées sur tous ses films.

function mViews(array) {
  let obj = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].movies.length; j++) {
      if (!obj.includes(array[i].name)) {
        obj[array[i].name] = 0;
      }
      obj[array[i].name] += array[i].movies[j].views;
    }
  }
  obj1 = obj.sort((a, b) => {
    a - b;
  });
  //  console.log(obj1)
  let max = 0;
  Object.entries(obj1).forEach((k, v) => {
    if (v == 0) {
      max = k;
    }
  });
  console.log(Object.entries(obj).slice(0, 1));
  // return obj1
  // array.
}
// mViews(directors);
const magasins = [
  {
    nom: "Magasin A",
    ville: "Casablanca",
    ventes: [
      { produit: "PC", prix: 5000, quantite: 2 },
      { produit: "Souris", prix: 100, quantite: 5 },
    ],
  },
  {
    nom: "Magasin B",
    ville: "Rabat",
    ventes: [
      { produit: "Clavier", prix: 300, quantite: 3 },
      { produit: "PC", prix: 4500, quantite: 1 },
    ],
  },
];

//  groupé par produit. Pour chaque produit calculer quantité total

function totalProduit(array) {
  return array.reduce((acc, v) => {
    v.ventes.forEach((e) => {
      if(!Object.keys(acc).includes(e.produit)){
        acc[e.produit]=0;
      }
      acc[e.produit]+=e.quantite;
    });return acc
  },{});
}
console.log(totalProduit(magasins));
// function totalProduit(array) {
//  let obj = {};
//  array.forEach(v=>{
//   v.ventes.forEach(e=>{
//     if(!Object.keys(obj).includes(e.produit)){
//       obj[e.produit]=0;
//     }
//     obj[e.produit].quentite+=e.quantite;
//     // console.log(obj[e.produit]+e.quantite)
//   })
//  })
//   return console.log(obj)
// }



