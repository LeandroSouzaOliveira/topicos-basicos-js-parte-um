const conteudo = document.getElementById("dados")
const dados = conteudo.innerHTML.split('\n').map(x => Number(x));

let maior = dados[0];
for (let i=1; i<dados.length; i++) {
    if (dados[i] > maior) {
        maior = dados[i];
    }
}

console.log(maior);

