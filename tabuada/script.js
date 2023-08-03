const conteudo = document.getElementById("dados");
const dados = conteudo.innerHTML.split('\n').map(x => Number(x));

for (let i = 1; i <= 10; i++) {
    console.log(`4 x ${i} = ${4 * i}`);
}