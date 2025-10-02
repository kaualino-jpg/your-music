const express = require("express");
const cors = require("cors");
const { rotausuarios } = require("./controlers/usuario");
const { rotaregistros } = require("./controlers/registros");
const { rotaplaylists } = require("./controlers/playlistss");
const { rotaTabelamusical } = require("./controlers/tab_musica");

const server = express();

server.use(express.json());
server.use(cors());
server.use(rotausuarios);

server.use(rotaregistros);
server.use(rotaplaylists);
server.use(rotaTabelamusical);

server.listen(3002, () => console.log("> rodafgdcfgdfgndo"));
