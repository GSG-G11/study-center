const router = require('express').Router();

const { getCoursesController } = require('../controllers');

router.get('/getCourses', getCoursesController);

module.exports = router;
