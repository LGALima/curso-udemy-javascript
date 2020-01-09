let valor // nao inicializada
console.log(valor); // undefined

valor = null; //ausencia de valor, nao aponta para nenhum local de memoria
console.log(valor); 
//console.log(valor.toString()); //erro

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evitar atribuir undefined;
console.log(!!produto.preco);
//delete produto.preco
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);