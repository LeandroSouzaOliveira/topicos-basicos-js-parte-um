// COMO PEGAR UM ELEMENTO DO HTML POR ID
console.log("**Retorna o elemento dentro da tag textarea**");
const elem = document.getElementById("dados");
console.log(elem);

// COMO PEGAR O CONTEÚDO DENTRO DE UM ELEMENTO HTML
console.log("**Retorna o conteúdo dentro da tag textarea**");
const conteudo = elem.innerHTML;
console.log(conteudo);

// COMO RECORTAR UM STRING COM BASE EM UM SEPARADOR
console.log("**Recortar a string com base em um separador**");
const nomeCompleto = "Maria Silva Borges";
const result1 = nomeCompleto.split(' ');
console.log(result1);

const result2 = conteudo.split('\n');
console.log(result2);

// COMO CONVERTER UM ARRAY DE STRINGS EM UM ARRAY DE NÚMEROS
console.log("**Converter um array de strings em um array de numeros**");
const str = "4.5";
console.log(str);
const n = Number(str);
console.log(n);

const numeros = result2.map(x => Number(x));
console.log(numeros);

// COMO MOSTRAR UM NÚMERO COM ARREDONDAMENTO
console.log("**Mostrar um numero com arredondamento**");
const x = 3.456;
console.log(x.toFixed(2));
console.log(numeros[0].toFixed(2));
