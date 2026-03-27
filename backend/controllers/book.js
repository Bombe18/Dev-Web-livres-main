const Thing = require('../models/book');

exports.createBook = (req, res, next) => {
  const thing = new Thing({
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    genre: req.body.genre,
    ratings: req.body.ratings,
    imageUrl: req.body.imageUrl,
  });

  thing.save()
    .then(() => res.status(201).json({ message: 'Livre créé avec succès !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllBook = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneBook = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};

exports.modifyBook = (req, res, next) => {
  Thing.updateOne(
    { _id: req.params.id },
    { ...req.body, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: 'Livre modifié !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteBook = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Livre supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};