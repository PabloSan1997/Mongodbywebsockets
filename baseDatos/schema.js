const mongoose = require('mongoose');

const Scema = mongoose.Schema;

const tareasS = new Scema({
    titulo:{
        type:String
    },
    desc:String,
    urld:String,
    estado:Boolean
});

const Tareas = mongoose.model("tareas", tareasS);

module.exports={Tareas};