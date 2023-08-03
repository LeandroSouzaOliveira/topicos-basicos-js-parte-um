const conteudo = document.getElementById("dados");
const dados = conteudo.innerHTML.split('\n').map(x => Number(x));

const dentro = 0;
const fora = 0;

for (let i=0; i<dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        dentro += 1;
    }
    else {
        fora += 1;
    }
}

console.log(`${dentro} DENTRO`);
console.log(`${fora} FORA`);