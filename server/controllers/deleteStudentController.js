const { deleteStudent } = require('../database/queires');

const deleteStudentController = (req, res) => {
  deleteStudent(req.body.id)
    .then((data) => res.json(data))
    .catch((error) => res.status(500).send(error));
};

module.exports = deleteStudentController;
