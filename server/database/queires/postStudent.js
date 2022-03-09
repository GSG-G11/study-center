const connection = require('../config/connection');

const postStudent = (id) => {
  const sql = {
    text: 'select course_name, student_name,student_id from courses join students on courses.course_id=students.course_id where students.course_id= ($1); ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = postStudent;
