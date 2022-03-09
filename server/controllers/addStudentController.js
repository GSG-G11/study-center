const { addStudent } = require('../database/queires');

const addStudentController = (req, res) => {
  addStudent(
    req.body.student_name,
    req.body.student_email,
    req.body.phone_number,
    req.body.coures_id,
  )
    .then(() => res.redirect('/nextPage'))
    .catch((error) => res.status(500).send(error));
};

module.exports = addStudentController;
