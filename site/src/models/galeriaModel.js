var database = require("../database/config");

function buscarPorId(id) {
  var query = `select * from galeria where id = '${id}'`;

  return database.executar(query);
}

function listar() {
  var query = `select * from galeria`;

  return database.executar(query);
}

function buscarPorCnpj(cnpj) {
  var query = `select * from galeria where cnpj = '${cnpj}'`;

  return database.executar(query);
}

function cadastrar(cnpj) {
  var query = `insert into galeria (cnpj) values ('${cnpj}')`;

  return database.executar(query);
}

module.exports = { buscarPorCnpj, buscarPorId, cadastrar, listar };
