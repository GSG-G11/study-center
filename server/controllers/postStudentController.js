const { postStudent } = require('../database/queires');

const postStudentController = (req, res) => {
  postStudent(req.body.id)
    .then((data) => res.json(data.rows))
    .catch((error) => res.status(500).send(error));
};

module.exports = postStudentController;
