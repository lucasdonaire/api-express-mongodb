import mongoose from "mongoose";
mongoose.connect("mongodb+srv://lucasd:senha123@cluster0.tn6b4uj.mongodb.net/?retryWrites=true&w=majority")
let db = mongoose.connection
export default db