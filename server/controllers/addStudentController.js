const { addStudent } = require('../database/queires');

const addStudentController = (req, res) => {
  addStudent(
    req.body.student_name,
    req.body.student_email,
    req.body.phone_number,
    req.body.coures_id,
  )
    .then(() => res.redirect('/'));
};

module.exports = addStudentController;
