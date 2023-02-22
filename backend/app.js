const express = require("express");

const app = express();

// Un middleware est un bloc de code qui traite les requêtes et réponses de votre application
app.use((req, res, next) => {
   console.log("Requête reçue !");
   next();
});

app.use((req, res, next) => {
   res.status(201);
   next();
});

app.use((req, res, next) => {
   res.json({ message: "Votre requête a bien été reçue !" });
   next();
});

app.use((req, res, next) => {
   console.log("Réponse envoyée avec succès !");
});

module.exports = app;
