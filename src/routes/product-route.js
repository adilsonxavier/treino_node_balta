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

module.exports = router;
