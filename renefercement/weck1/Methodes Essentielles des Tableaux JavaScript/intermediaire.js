// Exer: 1
function nettoyer(tableau) {
  const newTableau = tableau.filter((m) => {
    return m != 0 && m != false && m != null && m != undefined;
  });
  const t = [];
  newTableau.forEach((i) => {
    if (!t.includes(i)) {
      t.push(i);
    }
  });
  return t.sort((a, b) => a - b);
}
// console.log(nettoyer([1,5,2,0,null,false,undefined]));

// Exer2:

function rotate(t, n) {
  const index = n % t.length;
  var s = 0;
  var f = 0;
  for (j = 0; j < index; j++) {
    for (i = 0; i < t.length; i++) {
      if (i == 0) {
        s = t[i];
        t[i] = t[t.length - 1];
        continue;
      }
      f = t[i];
      t[i] = s;
      s = f;
    }
  }
  return t;
}
function rotate1(t, n) {
  const steps = n % t.length;
  for (i = 0; i < steps; i++) {
    t.unshift(t.pop());
  }
  return t;
}
// console.log(rotate1([1,2,3,4,5,6],3));
// Exr:13
function flatten(tableau) {
  return tableau.reduce((resultat, element) => {
    if (Array.isArray(element)) {
      return resultat.concat(flatten(element));
    }
    return resultat.concat(element);
  }, []);
}
// console.log(flatten([[1,[[[48]]]],[[[3]],4]]))
// exer:14
function intersection(a, b) {
  const t = [];
  a.forEach((e) => {
    b.forEach((el) => {
      if (e == el) {
        t.push(e);
      }
    });
  });
  return t;
}
// console.log(intersection([1,48,4,3],[3,4,1]))

// exer15
function groupBy(tableau, cle) {
  const tab = [];
  tableau.forEach((t) => {
    if (!tab.includes(t[cle])) tab.push(t[cle]);
  });
  const tab1 = { ...tab };
  Object.keys(tab1).forEach((k) => {
    tab1[tab[k]] = tab1[k];
    delete tab1[k];
  });
  var tab2 = [];
  Object.keys(tab1).forEach((k,v) => {
    tableau.forEach((t)=>{
        if (Object.values(t).includes(k)) {
            if(t[cle]==k){
               delete t[cle];
               tab2.push(t);
               tab1[k]=tab2; 
            }
        }
    });
    tab2=[];
});
console.log(tab1)
// exer16
}
function groupBy1(tableau,cle){
return tableau.reduce((acc,a)=>{
    const valuerCle = a[cle];
    if(!acc[valuerCle]){
        acc[valuerCle]=[]
    }
    acc[valuerCle].push(a);
    return acc;
},{})
}
const data = [
  { id: 1, nom: "Alice", service: "IT" },
  { id: 2, nom: "Bob", service: "RH" },
  { id: 3, nom: "Charlie", service: "IT" }
];

console.log(groupBy1(data, "service"));
groupBy(
  [
    { nom: "Stylo", categorie: "ecriture", prix: 1.5 },
    { nom: "Cahier", categorie: "papier", prix: 3.5 },
    { nom: "Feutre", categorie: "ecriture", prix: 2.0 },
    { nom: "Post-it", categorie: "papier", prix: 3.8 },
    { nom: "Ciseaux", categorie: "bureau", prix: 6.5 },
  ],
  "categorie",
);

