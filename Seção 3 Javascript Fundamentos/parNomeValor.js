// par nome/valor

const saudacao = 'Oi'; // Contexto Léxico 1

function exec() {
  const saudacao = 'Salveee'; // constexto léxico 2 // dentro da função
  return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
  nome: 'Pedro',
  idade: 32,
  endereco: {
    logradouro: 'Rua seila',
    numero: 123
  }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);