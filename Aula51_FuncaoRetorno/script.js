function soma(a, b){
    return a + b; 
}

console.log(soma(5,2)); 

function soma2(a, b){
    console.log(a + b); 
}

soma2(5,2);

//document.addEventListener('click', function(){
 //   document.body.style.backgroundColor = 'red';
//});

function criaPessoa(nome, sobrenome){
    return {nome: nome, sobrenome: sobrenome}
}

const p1 = criaPessoa('Vinicius', 'Felipe');
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1); 
console.log(p2); 

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo'));

function criaMultiplicador(multiplicador){
    function multiplicao(n){
        return n * multiplicador
    }

    return multiplicao;
}
const duplica = criaMultiplicador(2); 
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));