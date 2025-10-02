const { Router } = require("express");
const { db } = require("../db");

const rotaplaylists = Router();

rotaplaylists.get("/playlist", async (req, res) => {
  const playlist = await db.playlist_emocional.findMany();
  res.send(playlist);
});

rotaplaylists.post("/playlist", async (req, res) => {
  try {
    const { nome, email, palavra_chave } = req.body;
    const novo_playlist = await db.playlist_emocional.create({
      data: {
        nome,
        palavra_chave,
        email,
      },
    });

    res
      .status(201)
      .json({ mensagem: "playlist criado com sucesso", id: novo_playlist.id });
  } catch (err) {
    res.status(400).json({ mensagem: "Erro ao criar playlist", erro: err });
  }
});

rotaplaylists.put("/playlist/:id", async (req, res) => {
  try {
    const { nome, email, palavra_chave } = req.body;
    const { id } = req.parms;
    const novo_usuario = await db.playlist_emocional.update({
      where: { id },
      data: {
        nome,
        palavra_chave,
        email,
      },
    });

    res.status(201).json({
      mensagem: "playlist atualizado com sucesso",
      id: novo_playlist.id,
    });
  } catch (err) {
    res.status(400).json({ mensagem: "Erro ao atualizar playlist", erro: err });
  }
});

rotaplaylists.delete("/playlist/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const novo_playlist = await db.playlist_emocional.delete({
      where: { id: playlist },
    });

    res
      .status(201)
      .json({
        mensagem: "playlist deletado com sucesso",
        id: novo_playlist.id,
      });
  } catch (err) {
    console.log(err);
    res.status(400).json({ mensagem: "Erro ao deletar o playlist", erro: err });
  }
});
module.exports = { rotaplaylists };
