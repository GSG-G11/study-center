const { clientError, serverError } = require('./handleError');
const getCoursesController = require('./getCoursesController');
const addCoursesController = require('./addCourseController');

module.exports = {
  clientError,
  serverError,
  getCoursesController,
  addCoursesController,
};
