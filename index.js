const express = require("express");
const { conectar } = require("./baseDatos/conexion.js");
const { boomHandleError } = require("./middlewares/boomHandle.js");
const { crearApi } = require("./routers/index.js");
const cors = require("cors");

const app = express();

const PUERTO = process.env.PORT;
app.use(cors());
app.use(express.json());
conectar();
crearApi(app);

app.use(boomHandleError);
app.get("/", (req, res)=>{
    res.json({message:"Bienvenido a mi API :)"});
});

app.listen(PUERTO);
