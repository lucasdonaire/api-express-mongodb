import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "ERRO DE CONEXÃO"))
db.once("open", () => { console.log("conectado com o banco de dados") })

const app = express()
app.use(express.json())
routes(app)

export default app;