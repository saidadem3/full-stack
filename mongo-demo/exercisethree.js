const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Courses', courseSchema);

async function getCourses() {
  const courses = await Course.find({ isPublished: true })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort('price');
  console.log(courses);
}

getCourses();
