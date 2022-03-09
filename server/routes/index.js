const router = require('express').Router();

const {
  getCoursesController,
  addCoursesController,
  addStudentController,
  getCourseStudentController,
  deleteStudentController,
} = require('../controllers');

router.get('/getCourses', getCoursesController);
router.post('/add-course', addCoursesController);
router.post('/add-student', addStudentController);
router.get('/getCourseStudent', getCourseStudentController);
router.delete('/deleteStudent', deleteStudentController);

module.exports = router;
