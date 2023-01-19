import mongoose from "mongoose";

const musicasSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        genero: {type: String},
    }
)

const musicas = mongoose.model('musicas', musicasSchema)

export default musicas