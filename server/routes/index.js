const router = require('express').Router();

const {
  getCoursesController,
  addCoursesController,
  addStudentController,
  deleteStudentController,
  postStudentController,
  nextPage,
} = require('../controllers');

router.get('/nextPage', nextPage);
router.get('/getCourses', getCoursesController);
router.post('/add-course', addCoursesController);
router.post('/add-student', addStudentController);
router.post('/postStudent', postStudentController);
router.delete('/deleteStudent', deleteStudentController);

module.exports = router;
