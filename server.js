/*
    ?   ESTE FICHERO ES UNICAMENTE NECESARIO PARA CORRER ANGULAR SOBRE HEROKU
    *   SE INICIALIZA NUESTRO SERVIDOR EXPRESS BUSCANDO LA CARPETA "DIST"
    *   Y SE SIRVE BAJO EL PUERTO 8080
 */

const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(__dirname + "/dist/app-cv"));
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + "/dist/app-cv/index.html"));
});
app.listen(process.env.PORT || 8080);
