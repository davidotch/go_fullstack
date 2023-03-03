const express = require("express");
const router = express.Router();

const Thing = require("../models/Thing");



router.put("/api/stuff/:id", (req, res, next) => {
   Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
});

router.delete("/api/stuff/:id", (req, res, next) => {
   Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
});

router.post("/api/stuff", (req, res, next) => {
   delete req.body._id;
   const thing = new Thing({
      ...req.body,
   });
   thing
      .save()
      .then(() => res.status(201).json({ message: "Objet enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
});

router.get("/api/stuff/:id", (req, res, next) => {
   Thing.findOne({ _id: req.params.id })
      .then((thing) => res.status(200).json(thing))
      .catch((error) => res.status(404).json({ error }));
});

// Un middleware est un bloc de code qui traite les requêtes et réponses de votre application
router.get("/api/stuff", (req, res, next) => {
   Thing.find()
      .then((things) => res.status(200).json(things))
      .catch((error) => res.status(400).json({ error }));
});

module.exports = router;
