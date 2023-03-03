const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Thing = require("./models/Thing");

mongoose.set("strictQuery", true);
mongoose
   .connect(
      "mongodb+srv://DCardon:i9vuo9IE3V5w43Cp@cluster0.vf47xko.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
   )
   .then(() => console.log("Connexion à MongoDB réussie !"))
   .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

module.exports = app;
