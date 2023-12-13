var express = require("express");
var router = express.Router();

var galeriaController = require("../controllers/galeriaController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    galeriaController.cadastrar(req, res);
})

router.get("/buscar", function (req, res) {
    galeriaController.buscarPorCnpj(req, res);
});

router.get("/buscar/:id", function (req, res) {
  galeriaController.buscarPorId(req, res);
});

router.get("/listar", function (req, res) {
  galeriaController.listar(req, res);
});

module.exports = router;