const { getCourseStudent } = require('../database/queires');

const getCourseStudentController = (req, res) => {
  getCourseStudent()
    .then((data) => res.json(data.rows));
};

module.exports = getCourseStudentController;
