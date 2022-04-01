"use strict"


exports.post("/", (req, res, next) => {
    res.status(201).send(req.body);  // O res é sempre necessário para enviar o response pro cliente senão vai ficar aquardando
});