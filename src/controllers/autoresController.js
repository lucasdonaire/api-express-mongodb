import autores from "../models/autores.js";

class AutorController{

    static listarAutores = (req, res) => {
        autores.find((erro, autores_) => {
            res.status(200).send(autores_)
        }) 
    }

    static listarAutoresPorId = (req, res) => {
        const id = req.params.id
        autores.findById(id, (erro, autor) => {
            if(err){ 
                res.status(400).send({message:`${err.message} - falha ao procurar autor`})
            } else {
                res.status(200).send(autor)
            }
        })

    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err)=>{
            if (err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if (err){
                res.status(500).send({message:`${err.message} - falha ao atualizar autor`})
            } else {
                res.status(200).send('autor atualizada com sucesso')
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id

        autores.findByIdAndDelete(id, (erro) => {
            if(err){
                res.status(500).send({message:`${err.message} - falha ao deletar autor`})
            } else {
                res.status(200).send({message: "autor deletada"})
            }
        })
        
    }


}

export default AutorController