const connection = require('../config/connection');

const getCourseStudent = () => {
  const sql = {
    text: 'select course_name, student_name,student_id from courses join students on courses.course_id=students.course_id; ',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getCourseStudent;
