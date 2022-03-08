const { addCourses } = require('../database/queires');

const addCoursesController = (req, res) => {
  addCourses(req.body.course_name, req.body.course_hours)
    .then(() => res.redirect('/'));
};

module.exports = addCoursesController;
