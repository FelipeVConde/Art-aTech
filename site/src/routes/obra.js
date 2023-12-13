var express = require("express");
var router = express.Router();

var aquarioController = require("../controllers/obraController");

router.get("/:galeriaId", function (req, res) {
  aquarioController.buscarAquariosPorEmpresa(req, res);
});

router.post("/cadastrar", function (req, res) {
  aquarioController.cadastrar(req, res);
})

module.exports = router;