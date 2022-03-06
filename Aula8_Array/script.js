const nome = 'Vinicius';
//               0       1        2
const alunos = ['Luiz', 'Maria', 'Vinicius'];

console.log(alunos);
console.log(alunos[0]) //Exibe o primeiro aluno
console.log(alunos[2]);
console.log(alunos.length)// retorna o tamanho do array
alunos.push('Otavio'); //Adiciona item
console.log(alunos);
alunos.unshift('Vinicius'); //Inseri em primeiro
alunos.pop() //remove o ultimo
alunos.shift // remove o primeiro
delete alunos[1]; //remover algum que queira; 
console.log(alunos[50]);
console.log(alunos.slice(0,3)) //quebrar o array
console.log(typeof alunos);
console.log(alunos instanceof Array);