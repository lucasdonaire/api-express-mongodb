import express, { Router } from "express";
import AutorController from "../controllers/autoresController.js";

const routes = express.Router()

routes
    .get('/autores',AutorController.listarAutores)
    .get('/autores/:id',AutorController.listarAutoresPorId)
    .post('/autores',AutorController.cadastrarAutor)
    .put('/autores',AutorController.atualizarAutor)
    .delete('/autores',AutorController.excluirAutor)

export default routes