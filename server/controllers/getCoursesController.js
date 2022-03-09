const { getCourses } = require('../database/queires');

const getCoursesController = (req, res) => {
  getCourses()
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error));
};

module.exports = getCoursesController;
