const array = [1, 2, 3];
array.push(4);
array[0] = 'Vinicius';
console.log(array);

const pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Felipe',
    idade: 20
};

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);

function criapessoa(nome,sobrenome,idade){
    return {nome, sobrenome, idade};
}

const pessoa1 = criapessoa('Luiz', 'Junior', 25);
const pessoa2 = criapessoa('Vinicius', 'Felipe', 20);
const pessoa3 = criapessoa('Maria', 'Rosaria', 37);
const pessoa4 = criapessoa('Jean', 'Otavio', 26);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome, pessoa4.nome); 

