const { Router } = require("express");
const { db } = require("../db");

const rotausuarios = Router ()

rotausuarios.get("/usuarios", async (req, res) => {
    const usuarios = await db.usuario.findMany();
    res.send(usuarios);
});

rotausuarios.post("/usuarios",async (req, res) => {
    try {

        const {nome, email, palavra_chave} = req.body;
        const novo_usuario = await db.usuario.create({
            data: {
                nome, 
                palavra_chave, 
                email,
            },
        })

        res
        .status(201)
        .json({mensagem:"usuario criado com sucesso", id: novo_usuario.id});
    } catch(err) {
        res.status(400).json({ mensagem:"Erro ao criar usuario", erro: err});
    }
});
    

rotausuarios.put("/usuarios/:id",async (req, res) => {
    try{
        const {nome, email, palavra_chave} = req.body;
        const {id} = req.parms;
        const novo_usuario = await db.usuario.update ({
            where:{id}, 
            data: {
                nome, 
                palavra_chave, 
                email,
            },
        })
        
        res
        .status(201)
        .json({mensagem:"usuario atualizado com sucesso", id: novo_usuario.id});
    } catch(err) {
        res.status(400).json({ mensagem:"Erro ao atualizar usuario", erro: err});
    }
    }
)

rotausuarios.delete("/usuarios/:id",async (req, res) => {
    try{
        const {id} = req.params;
        const novo_usuario = await db.usuario.delete ({
            where:{id:usuario}, 
        })

        res
        .status(201)
        .json({mensagem:"usuario deletado com sucesso", id: novo_usuario.id});
    } catch(err) {
        console.log(err)
        res.status(400).json({ mensagem:"Erro ao deletar o usuario", erro: err});
    }
})
module.exports = {rotausuarios}
