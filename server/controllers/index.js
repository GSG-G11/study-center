const { clientError, serverError } = require('./handleError');
const getCoursesController = require('./getCoursesController');
const addCoursesController = require('./addCourseController');
const addStudentController = require('./addStudentController');
const getCourseStudentController = require('./getCourseStudentController');

module.exports = {
  clientError,
  serverError,
  getCoursesController,
  addCoursesController,
  addStudentController,
  getCourseStudentController,
};
