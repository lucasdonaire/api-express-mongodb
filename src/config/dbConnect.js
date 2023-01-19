import mongoose from "mongoose";
mongoose.connect("mongodb+srv://lucasd:senha123@cluster0.tn6b4uj.mongodb.net/curso-alura")
let db = mongoose.connection
export default db