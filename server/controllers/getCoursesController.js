const { getCourses } = require('../database/queires');

const getCoursesController = (req, res) => {
  getCourses()
    .then((data) => res.json(data.rows));
};

module.exports = getCoursesController;
