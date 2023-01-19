import musicas from "../models/musicas.js";

class MusicaController{

    static listarMusicas = (req, res) => {
        // musicas.find((erro, musicas_) => {
        //     res.status(200).send(musicas_)
        // }) 
        musicas.find()
            .populate('autor')
            .execute((err, autor) => {
                res.status(200).json(autor)
            })
    }

    static listarMusicasPorId = (req, res) => {
        const id = req.params.id
        musicas.findById(id, (erro, musica) => {
            if(err){ 
                res.status(400).send({message:`${err.message} - falha ao procurar musica`})
            } else {
                res.status(200).send(musica)
            }
        })

    }

    static cadastrarMusica = (req, res) => {
        let musica = new musicas(req.body)
        musica.save((err)=>{
            if (err){
                res.status(500).send({message:`${err.message} - falha ao cadastrar musica`})
            } else {
                res.status(201).send(musica.toJSON())
            }
        })
    }

    static atualizarMusica = (req, res) => {
        const id = req.params.id
        musicas.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
            if (err){
                res.status(500).send({message:`${err.message} - falha ao atualizar musica`})
            } else {
                res.status(200).send('musica atualizada com sucesso')
            }
        })
    }

    static excluirMusica = (req, res) => {
        const id = req.params.id

        musicas.findByIdAndDelete(id, (erro) => {
            if(err){
                res.status(500).send({message:`${err.message} - falha ao deletar musica`})
            } else {
                res.status(200).send({message: "musica deletada"})
            }
        })
        
    }

    static listarMusicasPorAutor = (req, res) => {
        const autor = req.params.autor

        musicas.find({autor:autor},{},(erro, musicas_) => {
            res.status(200).send(musicas_)
        })
        
    }


}

export default MusicaController