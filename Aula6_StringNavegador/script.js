const nome = prompt('Digite seu nome completo');

document.body.innerHTML += `O seu nome é: <strong>${nome}.</strong></br>`;
document.body.innerHTML += `Seu tem <strong>${nome.length}</strong> letras.</br>`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${nome[1]}</strong></br>`;
document.body.innerHTML += `Qual o primeiro indice da letra A no seu nome? <strong>${nome.indexOf('a')}</strong></br>`;
document.body.innerHTML += `Qual a ultima letra A no seu nome é: <strong>${nome.lastIndexOf('a')}</strong></br>`;
document.body.innerHTML += `As ultimas 3 letras do seu nome é: <strong>${nome.substring(nome.length - 3)} ou ${nome.slice(-3)}</strong></br>`;
document.body.innerHTML += `As palavras do seu nome são <strong>${nome.split(' ')} </strong></br>`;
document.body.innerHTML += `Seu nome com letras minusculas <strong>${nome.toLowerCase()}</strong></br>`;
document.body.innerHTML += `Seu nome com letras maiusculas <strong>${nome.toLocaleUpperCase()}</strong>`;