const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const genres = [
  { id: 1, genre: 'Action' },
  { id: 2, genre: 'Thriller' },
  { id: 3, genre: 'Mystery' },
  { id: 4, genre: 'Horror' },
  { id: 5, genre: 'Sci-Fi' }
];

app.get('/', (req, res) => {
  res.send('Welcome to Vidly!');
});

app.get('/api/genres', (req, res) => {
  res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
  const genre = genres.find(c => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(400).send('The genre with the given ID does not exist.');

  res.send(genre);
});

app.post('/api/genres', (req, res) => {
  const { error } = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    genre: req.body.genre
  };
  genres.push(genre);
  res.send(genre);
});

// app.post('/api/genres', (req, res) => {
//     const { error } = validateGenre(req.body);
//     if (error) return res.status(400).send(error.details[0].message);

//     const genre = {
//       id: genres.length + 1,
//       name: req.body.name
//     };
//     genres.push(genre);
//     res.send(genre);
//   });

function validateGenre(genre) {
  const schema = {
    genre: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(genre, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
