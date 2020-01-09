function tratarErroELancar(erro) {
  // throw new Error('...');
  throw 'erro erro erro ';
}

function imprimirNome(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!');
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log('final');
  }
}

const obj = { nome: 'Robert' }
imprimirNome(obj);