let a = 'A'; 
let b = a; 

console.log(a, b);

a = 'Outra Coisa'; 

console.log(a,b); 

let a1 = [1, 2, 3];
let b2 = a1; 
console.log(a1, b2); 

a1.push(4); 
console.log(a1, b2); 

b2.pop(4); 
console.log(a1, b2);