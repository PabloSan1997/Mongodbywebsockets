const boom = require("@hapi/boom");
const { Tareas } = require("../baseDatos/schema");

class ServiciosTareas {
  async leerDatos() {
    try {
      const datos = await Tareas.find();
      if (datos.length == 0) {
        throw boom.notFound("No hay elementos");
      }
      return datos;
    } catch (err) {
      throw err;
    }
  }
  async leerUnoId(id) {
    try {
      const datos = await Tareas.findOne({ _id: id });
      if (!datos) {
        throw boom.notFound("No existe ese elemento");
      }
      return datos;
    } catch (err) {
      throw err;
    }
  }
  async leerNombre(nombre) {
    try {
      const datos = await Tareas.findOne({ titulo: nombre });
      if (!datos) {
        throw boom.notFound("No existe ese elemento");
      }
      return datos;
    } catch (err) {
      throw err;
    }
  }
  async agregar(cuerpo) {
    try {
      const agregar = await new Tareas({ ...cuerpo, estado: false });
      agregar.save();
      return agregar;
    } catch (error) {
      throw boom.badRequest("No se podieron agregar datos");
    }
  }
  async editar(id, cuerpo) {
    try {
      const elemento = await this.leerUnoId(id);
      const editado = await Tareas.updateOne(elemento, cuerpo);
      return cuerpo;
    } catch (error) {
      throw error;
    }
  }
  async borrarUno(id) {
    try {
      const elemento = await Tareas.findOneAndDelete({ _id: id });
      if(!elemento){
        throw boom.badRequest("no se puede borrar ese elemento");
      }
      return elemento;
    } catch (error) {
      throw error;
    }
  }
  async borrarTodo() {
    try {
      const borrar = await Tareas.deleteMany();
      return borrar;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = {
  ServiciosTareas,
};
