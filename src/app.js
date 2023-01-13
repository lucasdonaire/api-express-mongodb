import express from "express";
import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "ERRO DE CONEXÃO"))
db.once("open", () => {
    console.log("conectado com o banco de dados")
})

const app = express()
app.use(express.json())

const musicas = [
    {id:1, name:"musicas 1"},
    {id:2, name:"musicas 2"},
    {id:3, name:"musicas 3"},
]

app.get('/',(req, res) => {
    res.status(200).send('nada')
})

app.get('/musicas',(req, res) => {
    res.status(200).send(musicas)
})

app.post('/musicas', (req, res) => {
    musicas.push(req.body)
    res.status(201).send('Musica criada')
})

app.put('/musicas/:id', (req, res) => {
    let musicaIdx = musicas.findIndex(msc => msc.id == req.params.id)
    for(let param in req.body){
        musicas[musicaIdx][param] = req.body[param]
    }
    res.status(200).json(musicas)
})

app.delete('/musicas/:id', (req, res) => {
    let musicaIdx = musicas.findIndex(msc => msc.id == req.params.id)
    musicas.splice(musicaIdx,1)
    res.status(200).send('livro apagado')
})

export default app;