// exer1

function fusionProfonde(obj1, obj2) {
  let obj = {};
  Object.keys(obj1).forEach((k) => {
    Object.keys(obj2).forEach((key) => {
      if (
        k == key &&
        obj1[k] instanceof Object &&
        obj2[key] instanceof Object
      ) {
        obj[k] = fusionProfonde(obj1[k], obj2[key]);
        //    console.log(obj[k]);
      } else if (
        !(obj1[k] instanceof Object) &&
        !(obj2[key] instanceof Object)
      ) {
        if (k == key) {
          obj[key] = obj2[key];
        }
        if (!(k in obj)) {
          obj[k] = obj1[k];
        }
        obj[key] = obj2[key];
      }
    });
  });
  return obj;
}

// console.log(
//   fusionProfonde({ a: 1, b: { h:{ x: 1, y: 2 } }}, { b: { h:{y: 99, z: 3} }, c: 4 }),
// );
// exer2
const releves = [
  { vendeur: "Alice", mois: "Jan", ventes: 12000 },
  { vendeur: "Bob", mois: "Jan", ventes: 8500 },
  { vendeur: "Alice", mois: "Fev", ventes: 15000 },
  { vendeur: "Bob", mois: "Fev", ventes: 11000 },
  { vendeur: "Clara", mois: "Jan", ventes: 9200 },
  { vendeur: "Clara", mois: "Fev", ventes: 13400 },
];
function pivoter(releves) {
  let obj = {};
  releves.forEach((k) => {
    if (Object.keys(obj).includes(k["vendeur"])) {
      obj[k["vendeur"]] += k["ventes"];
    } else {
      obj[k["vendeur"]] = k["ventes"];
    }
  });
  return obj;
}
function classement(releves) {
  let arraySort = Object.entries(pivoter(releves)).sort((a, b) => b[1] - a[1]);
  let array = [];
  arraySort.forEach((k) => {
    let obj1 = {};
    obj1.vendeur = k[0];
    obj1.total = k[1];
    array.push(obj1);
  });
  return array;
}
// console.log(classement(releves));

// exe 3

function diff(obj1, obj2) {
  let array1 = Object.entries(obj1);
  let array2 = Object.entries(obj2);
  let obj = {};
  for (let i = 0; i < array1.length; i++) {
    if (array1[i][0] == array2[i][0]) {
      if (array1[i][1] != array2[i][1]) {
        let o = {};
        let ob = {};
        ob.avant = array1[i][1];
        ob.apres = array2[i][1];
        o[array1[i][0]] = ob;
        obj.modifie = o;
      }
    } else if (array1[i][0] != array2[i][0]) {
      let ob = {};
      ob[array2[i][0]] = array2[i][1];
      obj.ajouter = ob;
      ob = {};
      ob[array1[i][0]] = array1[i][1];
      obj.supprime = ob;
    }
  }
  return obj;
}
// console.log
// (diff(
// { nom:'Alice', age:28, ville:'Paris'
// },
// { nom:'Alice', age:29, pays:'France' }
// ));

const paires = [
  ["prenom", "Alice"],
  ["adresse.rue", "12 rue du Code"],
  ["adresse.ville", "Paris"],
  ["tags[]", "js"],
  ["tags[]", "web"],
];
// exe 4
function serialiser(paires) {
  let obj = {};
  let o = {};
  for (let i = 0; i < paires.length; i++) {
    if (paires[i][0].includes(".")) {
      let ob = paires[i][0].split(".");
      // console.log(ob);
      o[ob[1]] = paires[i][1];
      obj[ob[0]] = o;
    } else if (paires[i][0].includes("[]")) {
      let ar = paires[i][0].split("[]");
      if (!Array.isArray(obj[ar[0]])) {
        obj[ar[0]] = [];
      }
      obj[ar[0]].push(paires[i][1]);
    } else {
      obj[paires[i][0]] = paires[i][1];
    }
  }
  console.log(obj);
}
serialiser(paires);
