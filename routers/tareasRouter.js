const express = require("express");
const { Tareas } = require("../baseDatos/schema");
const { validatorHandler } = require("../middlewares/boomHandle");
const { agregarTarea, editarTarea } = require("../schema/tareasSchema");
const { ServiciosTareas } = require("../servicios/tareasServicios");

const servicios = new ServiciosTareas();
const tareasR = express.Router();

tareasR.get("/", async (req, res, next) => {
  try {
    const elemento = await servicios.leerDatos();
    res.json(elemento);
  } catch (error) {
    next(error);
  }
});
tareasR.get("/nom", async (req, res, next) => {
  console.log(req.query);
  try {
    const elemento = await servicios.leerNombre(req.query.nombre);
    res.json(elemento);
  } catch (error) {
    next(error);
  }
});
tareasR.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const buscar = await servicios.leerUnoId(id);
    res.json(buscar);
  } catch (error) {
    next(error);
  }
});
tareasR.post( "/",validatorHandler(agregarTarea, "body"),
  async (req, res, next) => {
    try {
      const elemento = await servicios.agregar(req.body);
      res.json(elemento);
    } catch (error) {
      next(error);
    }
  }
);
tareasR.patch( "/:id",validatorHandler(editarTarea, "body"),
async (req, res, next) => {
  const {id}=req.params;
  try {
    const elemento = await servicios.editar(id,req.body);
    res.json(elemento);
  } catch (error) {
    next(error);
  }
});
tareasR.delete("/todoalv", async (req, res, next)=>{
  try {
    const borrar = await servicios.borrarTodo();
    res.json(borrar);
  } catch (error) {
    next(error);
  }
});
tareasR.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const borrar = await servicios.borrarUno(id);
    res.json(borrar);
  } catch (error) {
    next(error);
  }
});

module.exports = { tareasR };
