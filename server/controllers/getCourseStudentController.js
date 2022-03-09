const { getCourseStudent } = require('../database/queires');

const getCourseStudentController = (req, res) => {
  getCourseStudent()
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error));
};

module.exports = getCourseStudentController;
