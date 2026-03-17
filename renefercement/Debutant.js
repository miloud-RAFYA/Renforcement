// exer:1
let taches=[];
taches.push('Coder', 'Tester', 'Deployer');
taches.unshift('Analyser');
const f=taches.pop();
const d=taches.shift();
taches.splice(1,0,'Documenter');
taches.splice(2,1,'Revue de code');
// exer:2
// console.log(taches);
const prenoms = ['Alice', 'Bob', 'Clara', 'David', 'Eva'];
var longueur=[];
prenoms.forEach((prenom , index)=>{
        //   console.log(prenom,index);
        //   longueur.push(prenom.length);
});
// console.log(longueur);
longueur.forEach((v,i)=>{
    if(v>3){
        // console.log(prenoms[i]);
    }
});
// exer:3
const temperatures = [0, 15, 22, 35, -5, 100];
const fahrenheit=temperatures.map(t=>t*9/5+32);
// console.log(fahrenheit);
var descriptions=temperatures.map((t)=> {
if(t>=30){
    return 'Chaud';
}else if(t<0){
    return 'froid';
}else{
    return 'tempere';
}
});
var objets={};
objets=temperatures.map(t=>{
    if(t>=30){
        return {'celsius': t*9/5+32, 
                statut:'Chaud'} 
    }else if(t<0){
          return {'celsius': t*9/5+32, 
                statut:'froid'} 
    }else{
          return {'celsius': t*9/5+32, 
                statut:'tempere'} 
    }
})
// exer:4
const mots =['chat','cheval','chien','lion','chameau','cobra','loup','chevre'];
const ch=mots.filter((m)=>{
    return (m.startsWith('ch') && m.startsWith('ch'));
});
const motlength=mots.filter((m)=>{
    return m.length>5;
});
const ch_length=mots.filter((m)=>{
    return (m.length>5 && m.startsWith('ch'));
});

// exer:5
const catalogue = [
{ ref: 'A01', nom: 'Stylo bille', prix: 1.20 },
{ ref: 'A02', nom: 'Cahier A4', prix: 3.50 },
{ ref: 'A03', nom: 'Surligneur', prix: 2.10 },
{ ref: 'A04', nom: 'Post-it', prix: 3.80 },
{ ref: 'A05', nom: 'Ciseaux', prix: 6.30 },
];

const produit=catalogue.find(c=>c.ref==='A03');
const idx=catalogue.findIndex(u=>u.nom==='Cahier A4');
const messageUndefined=catalogue.find(c=>
  c.ref==='A33') ||{ref:'inconue'};
// console.log(messageUndefined);
// exer:6
const nb = [9, 2, 3, 4, 5];
const somme = nb.reduce((acc, n) => acc + n, 1,0);
const max = nb.reduce((acc, n) => n > acc ? n : acc); // 5
const animaux = ['chat','chien','chat','oiseau','chat'];
const compte = animaux.reduce((acc, a) => {
acc[a] = (acc[a] || 0) + 1;
return acc;},{});
const notes = [14, 8, 17, 11, 15, 9, 18, 12];
const someNotes=notes.reduce((acc,n)=>acc+n);
const mynNotes=(notes.reduce((acc,n)=>acc+n))/notes.length;
const maxNote=notes.reduce((acc,n)=>n>acc ? n:acc);
const noteDessusVg=notes.reduce((acc,n)=>(n < mynNotes ?acc+1:acc),0);
// exer:7
const scores = [45, 12, 78, 3, 99, 56, 23, 67];
const noms = ['Zoe','Alice','Marc','Bob','Yasmine','Chloe'];
const scoreCroissant=[...scores].sort((a,b)=> a-b);
const scoreDecroissant=[...scores].sort((a,b)=> b-a);
const nomsTrieAlph=noms.sort((a,b)=>a.localeCompare(b))
const troisMeilleurs=scoreDecroissant.slice(0,3);
// exer:8
let fruits=['pomme','poire'] ;
let legumes=['carotte','tomate'];
let aliments=[...fruits,...legumes];
console.log(aliments);