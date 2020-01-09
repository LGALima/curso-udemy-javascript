// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 4);
imprimirSoma(2);
imprimirSoma(2, 3, 4);

//Função com retorno

function soma(a, b = 0) {
  return a + b;
}

console.log(soma(3, 500));
console.log(soma(2))