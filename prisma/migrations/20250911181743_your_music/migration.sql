-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "palavra_chave" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Registro_emocional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "emocoes" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    "playlistss_id" INTEGER NOT NULL,
    CONSTRAINT "Registro_emocional_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Registro_emocional_playlistss_id_fkey" FOREIGN KEY ("playlistss_id") REFERENCES "Playlist_emocional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Playlist_emocional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "registro_id" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Tab_musica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "artista" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "links" TEXT NOT NULL,
    "playlistss_id" INTEGER NOT NULL,
    CONSTRAINT "Tab_musica_playlistss_id_fkey" FOREIGN KEY ("playlistss_id") REFERENCES "Playlist_emocional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
