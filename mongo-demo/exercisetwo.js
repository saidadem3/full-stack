const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Error: ', err));

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
  const courses = await Course.find({
    isPublished: true,
    tags: { $in: ['frontend', 'backend'] }
  })
    .sort('-price')
    .select('name author price');
  console.log(courses);
}

getCourses();
