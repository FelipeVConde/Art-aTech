var database = require("../database/config");

function buscarObraPorGaleria(galeriaId) {

  instrucaoSql = `select * from obra a where fkgaleria = ${galeriaId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(galeriaId, descricao) {
  
  instrucaoSql = `insert into (descricao, fkgaleria) obra values (${descricao}, ${galeriaId})`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  buscarObraPorGaleria,
  cadastrar
}
