const config = require('config');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const app = express();

// console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //undefined by default
// console.log(`app: ${app.get('env')}`); //default to 'development' enviornment

app.use(express.json());
app.use(express.static('public'));
app.use(helmet());

//Configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  console.log('Morgan enabled...');
}

app.use(logger);

const courses = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'English' },
  { id: 3, name: 'History' }
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID does not exist');

  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID does not exist');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID does not exist');
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };

  return Joi.validate(course, schema);
}
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
