// Exer: 1
function nettoyer(tableau){
const newTableau=tableau.filter((m)=>{
    return m!=0 && m!=false && m!= null && m!=undefined;
});
const t=[];
newTableau.forEach(i => {
    if (!t.includes(i)){
        t.push(i)
    }  
});
return t.sort((a,b)=>a-b);
}
// console.log(nettoyer([1,5,2,0,null,false,undefined]));

// Exer2:

function rotate(t,n){
const index=n%t.length;
var s=0;
var f=0;
for(j=0;j<index;j++){
    for(i=0;i<t.length;i++){
            if(i==0){
                s=t[i];
                t[i]=t[t.length-1];
                continue;
            }
            f=t[i];
            t[i]=s;
            s=f;        
        }
}
 return t;     
}
function rotate1(t,n){
    const steps=n%t.length;
    for(i=0;i<steps;i++){
        t.unshift(t.pop());
    }
    return t;
}
console.log(rotate1([1,2,3,4,5,6],3));
