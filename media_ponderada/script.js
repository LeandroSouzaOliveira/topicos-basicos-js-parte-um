const conteudo = document.getElementById("dados");
const dados = conteudo.innerHTML.split('\n').map(x => Number(x));

for (let i = 0; i < dados.length; i++) {

    if (i == 0) {
        const novo = dados[i] * 2;
        dados[i] = novo;
    }
    else if (i == 1) {
        const novo = dados[i] * 3;
        dados[i] = novo;
    }
    else {
        const novo = dados[i] * 5;
        dados[i] = novo;
    }
}

sum = 0.0;
for (let i = 0; i < dados.length; i++) {
    sum += dados[i];
}

const somaPesos = 2 + 3 + 5;

const media = sum / somaPesos;

console.log("Media ponderada: " + media.toFixed(1));