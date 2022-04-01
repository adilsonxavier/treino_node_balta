"use strict"


exports.post = ("/", (req, res, next) => {
    res.status(201)//.send(req.body);  // O res é sempre necessário para enviar o response pro cliente senão vai ficar aquardando
    .send({ obs:" post do controller ", item: req.body });
});

exports.put = ("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id + " put do controller", item: req.body });
});

exports.delete = ("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id + " delete do controller", item: req.body });
});