/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Client";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Voiture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "datedenaissance" DATETIME NOT NULL,
    "tel" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "cap" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "modelevehicule" TEXT NOT NULL,
    "numeroclient" TEXT NOT NULL,
    "alimentation" TEXT NOT NULL,
    "typemotorisation" TEXT NOT NULL,
    "finition" TEXT NOT NULL,
    "dateimmat" DATETIME NOT NULL,
    "typepaiement" TEXT NOT NULL,
    "datefinpaiement" DATETIME NOT NULL,
    "dateanniversairelivraison" DATETIME NOT NULL,
    "activeralerte" BOOLEAN NOT NULL DEFAULT false
);
