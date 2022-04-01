"use strict"
const app = require("../src/app");
const http = require("http"); // caminho sem ./ indica que vai buscar na pasta node_modules
const debug = require("debug")("nodestr:server");
//const express = require("express");
//const { title } = require("process");
//const teste = require("./pasta_raiz/exemplo.js");

//const app = express();

const port = normalizePort(process.env.port || 3000); // Caso o servidor forneça uma porta através da var process.env.port
                                                      // esta será a usada senão será a 3000  


app.set("port", port); // adiciona o valor port na entrada "port" no objeto settings da variável do tipo "express()" app
//console.log("env " + process.env.port);
//console.log(app);
//console.log(app.settings.env);

const server = http.createServer(app); // cria um servidor http baseado no app(express - mvc)
//const router = express.Router(); // para o usuário acessar via url

//const route = router.get("/", (req, res, next) => {
//    res.status(200).send({
//        title: "node store",
//        version: "1.0"
//    }

//    );
//});
//app.use("/", route);

server.listen(port);

server.on("error", onError)
server.on("listening", onListening)

console.log("api com nodemn rodando na porta" + port)

// console.log("porta"+ normalizePort(10));

function normalizePort(val) {
    const port = parseInt(val);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
    debug('Listening on ' + bind);
}
