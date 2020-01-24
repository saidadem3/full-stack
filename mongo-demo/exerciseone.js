const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/mongo-exercises')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error: ', err));

const courseSchema = new mongoose.Schema({
  tags: [String],
  date: Date,
  name: String,
  author: String,
  isPublished: Boolean,
  Price: Number
});

const Course = mongoose.model('courses', courseSchema);

async function getCourses() {
  try {
    return await Course.find({ isPublished: true, tags: 'backend' })
      .sort({ name: 1 })
      .select('name author');
  } catch (err) {
    console.log('Error: ', err.message);
  }
}
async function run() {
  const courses = await getCourses();
  console.log(courses);
}

run();
