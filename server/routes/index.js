const router = require('express').Router();

const { getCoursesController, addCoursesController, addStudentController } = require('../controllers');

router.get('/getCourses', getCoursesController);
router.post('/add-course', addCoursesController);
router.post('/add-student', addStudentController);

module.exports = router;
