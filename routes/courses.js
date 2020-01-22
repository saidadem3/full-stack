const express = require('express');
const router = express.Router();

const courses = [
  { id: 1, name: 'Math' },
  { id: 2, name: 'English' },
  { id: 3, name: 'History' }
];

router.get('/api/courses', (req, res) => {
  res.send(courses);
});

router.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

router.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID does not exist');

  const { error } = validateCourse(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    return res.status(404).send('The course with the given ID does not exist');

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

router.get('/api/courses/:id', (req, res) => {
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

module.exports = router;
