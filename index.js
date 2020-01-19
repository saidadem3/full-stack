const express = require('express');
const app = express();

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

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course)
    res.status(400).send('The course with the given ID does not exist');
  res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
