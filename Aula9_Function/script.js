function saudacao(nome){
    return `Bom dia ${nome}`;
}

const variavel = saudacao('Luiz'); 
console.log(variavel);
saudacao('Felipe');

function soma(x,y){
    const resultado = x + y;
    return resultado; 
}

console.log(soma(2,3));
console.log(soma(3,1));

const raiz = function(n){
    return n ** 0.5;
}

console.log(raiz(9));

const menos = (n) =>{ // arrow function
    return n - 2;
}

console.log(menos(3));

const mult = n => n * 2;  //arrow function

console.log(mult(2));