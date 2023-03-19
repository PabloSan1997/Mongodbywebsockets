const express = require("express");
const { tareasR } = require("./tareasRouter.js");

const direc = express.Router();

function crearApi(app){
    app.use( "/api/v1" , direc);
    direc.use("/tareas", tareasR);
}

module.exports={crearApi}