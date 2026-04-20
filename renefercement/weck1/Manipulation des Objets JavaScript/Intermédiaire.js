// exer1

function fusionProfonde(obj1, obj2) {
  let obj = {};
  Object.keys(obj1).forEach((k) => {
    Object.keys(obj2).forEach((key) => {
      if (
        k == key &&
        (obj1[k] instanceof Object &&
        obj2[key] instanceof Object)
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
        if(!(k in obj)){
            obj[k] = obj1[k];
        }
        obj[key] = obj2[key];
      }
    });
  });
  return obj;
}

console.log(
  fusionProfonde({ a: 1, b: { h:{ x: 1, y: 2 } }}, { b: { h:{y: 99, z: 3} }, c: 4 }),
);
