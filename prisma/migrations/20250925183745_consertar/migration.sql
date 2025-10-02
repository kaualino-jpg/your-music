/*
  Warnings:

  - You are about to drop the column `playlistss_id` on the `Registro_emocional` table. All the data in the column will be lost.
  - You are about to drop the column `playlistss_id` on the `Tab_musica` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_Playlist_emocionalToTab_musica" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_Playlist_emocionalToTab_musica_A_fkey" FOREIGN KEY ("A") REFERENCES "Playlist_emocional" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Playlist_emocionalToTab_musica_B_fkey" FOREIGN KEY ("B") REFERENCES "Tab_musica" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Playlist_emocional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "registro_id" INTEGER NOT NULL,
    CONSTRAINT "Playlist_emocional_registro_id_fkey" FOREIGN KEY ("registro_id") REFERENCES "Registro_emocional" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Playlist_emocional" ("id", "nome", "registro_id") SELECT "id", "nome", "registro_id" FROM "Playlist_emocional";
DROP TABLE "Playlist_emocional";
ALTER TABLE "new_Playlist_emocional" RENAME TO "Playlist_emocional";
CREATE TABLE "new_Registro_emocional" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "emocoes" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,
    CONSTRAINT "Registro_emocional_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Registro_emocional" ("emocoes", "id", "usuario_id") SELECT "emocoes", "id", "usuario_id" FROM "Registro_emocional";
DROP TABLE "Registro_emocional";
ALTER TABLE "new_Registro_emocional" RENAME TO "Registro_emocional";
CREATE TABLE "new_Tab_musica" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "artista" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "links" TEXT NOT NULL
);
INSERT INTO "new_Tab_musica" ("artista", "genero", "id", "links", "titulo") SELECT "artista", "genero", "id", "links", "titulo" FROM "Tab_musica";
DROP TABLE "Tab_musica";
ALTER TABLE "new_Tab_musica" RENAME TO "Tab_musica";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "_Playlist_emocionalToTab_musica_AB_unique" ON "_Playlist_emocionalToTab_musica"("A", "B");

-- CreateIndex
CREATE INDEX "_Playlist_emocionalToTab_musica_B_index" ON "_Playlist_emocionalToTab_musica"("B");
