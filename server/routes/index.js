const router = require('express').Router();

const { getCoursesController, addCoursesController } = require('../controllers');

router.get('/getCourses', getCoursesController);
router.post('/add-course', addCoursesController);

module.exports = router;
