const conteudo = document.getElementById("dados");
const dados = conteudo.innerHTML.split('\n').map(x => Number(x));

sum = 0;
cont = 0;
for (let i = 0; i < dados.length; i++) {
    if (dados[i] > 0) {
        sum += dados[i];
        cont += 1;
    }
}

if (cont === 0) {
    console.log("IMPOSSIVEL CALCULAR");
}
else {
    const media = sum / cont;
    console.log("MEDIA = " + media.toFixed(2));
}