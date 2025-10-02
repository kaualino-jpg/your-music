const { Router } = require("express");
const { db } = require("../db");

const rotaTabelamusical = Router();

rotaTabelamusical.get("/tab_musica", async (req, res) => {
  const tab_musica = await db.tab_musica.findMany();
  res.send(tab_musica);
});

rotaTabelamusical.post("/tab_musica", async (req, res) => {
  try {
    const { titulo, artista, genero, links } = req.body;
    const nova_tabelamusical = await db.tab_musica.create({
      data: {
        titulo,
        artista,
        genero,
        links,
      },
    });

    res
      .status(201)
      .json({
        mensagem: "tabela musical criado com sucesso",
        id: nova_tabelamusical.id,
      });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ mensagem: "Erro ao criar tabela musical", erro: err });
  }
});

rotaTabelamusical.put("/tab_musica/:id", async (req, res) => {
  try {
    const { titulo, artista, genero, links } = req.body;
    const { id } = req.params;
    const nova_tabelamusical = await db.tab_musica.update({
      where: { id: Number(id) },
      data: {
        titulo,
        genero,
        artista,
        links,
      },
    });

    res
      .status(201)
      .json({
        mensagem: "tab_musica atualizado com sucesso",
        id: nova_tabelamusical.id,
      });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ mensagem: "Erro ao atualizar tab_musica", erro: err });
  }
});

rotaTabelamusical.delete("/tab_musica/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const nova_tabelamusical = await db.tab_musica.delete({
      where: { id: Number(id) },
    });

    res
      .status(201)
      .json({
        mensagem: "tab_musica deletado com sucesso",
        id: nova_tabelamusical.id,
      });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ mensagem: "Erro ao deletar o tab_musica", erro: err });
  }
});
module.exports = { rotaTabelamusical };
