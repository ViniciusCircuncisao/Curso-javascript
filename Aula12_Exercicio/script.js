function meuEscopo() {

    const form = document.querySelector('.form');
    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');
    const texto = document.querySelector('.texto');
    const pessoas = [];

    const criaTagP = () => {
        const p = document.createElement('p');
        return p;
    }

    const recebeEvento = (e) => {
        const p = criaTagP();

        e.preventDefault();

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);
    
        const msg = `${nome.value} ${sobrenome.value} seu peso é: ${peso.value} e altura: ${altura.value}`;
        p.innerHTML = msg;

        texto.appendChild(p);

    }

    form.addEventListener('submit', recebeEvento);

}

meuEscopo();
