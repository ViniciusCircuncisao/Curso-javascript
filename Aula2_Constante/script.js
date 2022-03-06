const nome = 'Vinicius';
const sobrenome = 'Felipe';
const idade = 20;
const peso = 110; 
const altura = 1.79; 
const data = new Date();
const anoAtual = data.getFullYear(); 
let imc; 
let dataNascimento; 

imc = peso / (altura ** altura);
dataNascimento = anoAtual - idade; 

console.log(`${nome} ${sobrenome} tem ${idade} anos, e pesa ${peso}Kg tem ${altura} metros e seu imc é: ${imc.toFixed()}`); 
