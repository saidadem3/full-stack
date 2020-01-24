const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean
});
const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
  const course = new Course({
    name: 'Angular Course',
    author: 'Mosh',
    tags: ['angular', 'frontend'],
    isPublished: true
  });
  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course
    //.find({ author: 'Mosh', isPublished: true })
    //.find({ price: { $gte: 10, $lte: 20 } }) // returns a price that is 10 <= x <= 20
    //.find({ price: { $in: [10, 15, 20] } }) //querying courses that are either 10, 15, or 20
    // .find() //this goes with the or
    // .or({ author: 'Mosh' }, { isPublished: true }) //query courses that either have the given author OR isPublished = true
    .find({ author: /^S/ }) //use regular expressions to make querying easier. e.g return authors that start with S (case sensitive)
    //to find a string that ends with something use $. e.g /aid$/ will return the courses with Said.
    //to make r.e. case insensitive append an i. e.g /Aid$/i
    //
    .limit(10)
    .sort({ name: 1 })
    .select({ name: 1, tags: 1 });
  //.count() returns the count of query. if you use count, select won't be implemented
  console.log(courses);
}

getCourses();
