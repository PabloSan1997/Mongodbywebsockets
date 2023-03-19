
const mongoose = require("mongoose");


const URL = `mongodb+srv://pablo:1234@cluster0.c9zjxa0.mongodb.net/elementos?retryWrites=true&w=majority`;

function conectar(){
    mongoose.connect(URL,  { useNewUrlParser: true, useUnifiedTopology: true });
    // mongoose.connect(URL,  { useNewUrlParser: true, useUnifiedTopology: true })
    // .then(mes=>{console.log("Se ha conectado con el server")}).catch(err=>console.log("error al conectar"));
} 

module.exports={conectar}
