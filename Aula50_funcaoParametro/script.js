// argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c, d, e, f, g) {

    console.log(a, b, c, d, e, f, g);
    let total = 0;

    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}

funcao(1, 2, 3, 4, 5, 6, 7);

function fucao1(a, b = 2, c = 4) {
    console.log(a + b + c);
}

funcao1(2, 10);

function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

funcao2({ nome: 'Vinicius', sobrenome: 'Felipe', idade: 20 });


function funcao3([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao3(['Vinicius', 'Felipe', 30]);

function conta(operador, acumulador, ...numeros) {

    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(operador, acumulador, numeros);
}

conta('+', 1, 20, 30, 40, 50); 

const conta1 = function () {
    console.log(arguments);
};

conta1('+', 1, 20, 30, 40, 50); 