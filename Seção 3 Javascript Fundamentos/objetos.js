const prod1 = {};
prod1.nome = 'Celular';
prod1.preco = 4998.90;
prod1['Desconto legal'] = 0.40 //evitar atributos com espaço
prod1['teste'] = 'teste';
console.log(prod1);

const prod2 = {
  nome: 'Camisa Polo',
  preco: 90.0,
  obj: {
    obj: {
      oi: 'oi'
    }
  }
}

console.log(prod2);