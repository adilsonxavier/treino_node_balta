"use strict"
const express = require("express");
const router = express.Router(); // para o usuário acessar via url

const get = router.get("/", (req, res, next) => {
    res.status(200).send({
        title: "node storealt get modulos index",
        version: "1.0"
    }

    );
});

 router.post("/", (req, res, next) => {
    res.status(201).send(req.body);  // O res é sempre necessário para enviar o response pro cliente senão vai ficar aquardando
});                                 // uma resposta até dar timeout
// 201 (created) // neste exemplo estou só mandando de volta o corpo da requisição

 router.put("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id + "tito index-route put", item: req.body });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id + "tito del index,route", item: req.body });
});

module.exports = router;
