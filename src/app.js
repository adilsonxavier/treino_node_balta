"use strict"
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const router = express.Router(); // para o usuário acessar via url

// carregar as rotas
const indexRoute = require("./routes/index-route");
const productRoute = require("./routes/product-route");



app.use(bodyParser.json());  // Aqui fica como um middleware para que o bodyParser seja usado para todos os arquivos que 
                             // importarem o app.js
app.use(bodyParser.urlencoded({extended:false}))

//const get = router.get("/", (req, res, next) => {
//    res.status(200).send({
//        title: "node storealt get",
//        version: "1.0"
//    }

//    );
//});

//const route = router.get("/", (req, res, next) => {   //  (req, res, next) = request, response, next
//    res.status(200).send({  // send é o conteúdo ue vai ser enviado no corpo da response pro cliente
//        title: "node storealt",
//        version: "1.0"
//    }

//    );
//});

/*
const create = router.post("/", (req, res, next) => {
    res.status(201).send(req.body);  // O res é sempre necessário para enviar o response pro cliente senão vai ficar aquardando
});                                 // uma resposta até dar timeout
                                    // 201 (created) // neste exemplo estou só mandando de volta o corpo da requisição

const put = router.put("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id+"tito dfdsa", item: req.body});
});

const del = router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({ id: id + "tito del", item: req.body });
});
*/



//app.use("/", get);

/*
app.use("/",indexRoute);
app.use("/products", create);
app.use("/products", put);
app.use("/products", del);
*/


//const put = router.put("/:id", (req, res, next) => {
//    const id = req.params.id;
//    res.status(200).send({ id: id + "tito 1109", item: req.body });
//});

//app.use("/products", put);
app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app; // A variável app começou como uma instância de express mas como foram acrescentados vários app.use(),
                      // o que vai ser exportado agora é uma instância de express já configurado com o que acrescentei nos .use(..)

