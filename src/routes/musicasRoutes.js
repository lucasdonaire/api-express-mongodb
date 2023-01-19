import express, { Router } from "express";
import MusicaController from "../controllers/musicasController.js";

const routes = express.Router()

routes
    .get('/musicas',MusicaController.listarMusicas)
    .get('/musicas/autor/:autor',MusicaController.listarMusicasPorAutor)
    .get('/musicas/:id',MusicaController.listarMusicasPorId)
    .post('/musicas',MusicaController.cadastrarMusica)
    .put('/musicas',MusicaController.atualizarMusica)
    .delete('/musicas',MusicaController.excluirMusica)

export default routes