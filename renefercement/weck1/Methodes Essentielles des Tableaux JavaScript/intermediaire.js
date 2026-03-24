// Exer: 1
function nettoyer(tableau){
let tableauNettoy=[];
tableau.reduce((acc,n)=>{
    Number.isInteger(n) && n!=0;
    return acc;
},[]);
}
console.log(nettoyer([1,2,3,5,'gg',false,NaN]))