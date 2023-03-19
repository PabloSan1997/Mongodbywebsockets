const Joi = require("joi");

const titulo = Joi.string().min(1).max(20);
const desc= Joi.string().min(1);
const urld=Joi.string().min(0);
const estado = Joi.boolean();
const agregarTarea = Joi.object({
    titulo:titulo.required(),
    desc:desc.required(),
    urld:urld.required()
});

const editarTarea = Joi.object({
    titulo:titulo,
    desc:desc,
    urld:urld,
    estado:estado
});

module.exports={editarTarea, agregarTarea}