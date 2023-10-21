import mongoose, { mongo } from "mongoose";

// const url = 'mongodb://127.0.0.1:27017/proyectoFinal'; //el local host se puede escribir como 127.0.0.1 (base de dato local)
const url = 'mongodb+srv://renatotrevisiolmontiel:fPbKBegJSpWk3bOi@cluster0.ocbnp8v.mongodb.net/dongenaro';

//fPbKBegJSpWk3bOi

mongoose.connect(url);

const datosConexion = mongoose.connection

datosConexion.once('open', ()=>{
  console.log('BD conectada')
})