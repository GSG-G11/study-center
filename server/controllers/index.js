const { clientError, serverError } = require('./handleError');
const getCoursesController = require('./getCoursesController');
const addCoursesController = require('./addCourseController');
const addStudentController = require('./addStudentController');
const postStudentController = require('./postStudentController');
const deleteStudentController = require('./deleteStudentController');
const nextPage = require('./nextPage');

module.exports = {
  clientError,
  serverError,
  getCoursesController,
  addCoursesController,
  addStudentController,
  postStudentController,
  deleteStudentController,
  nextPage,
};
