const connection = require('../config/connection');

const addStudent = (name, email, phone, courseId) => {
  const sql = {
    text: 'insert into students (student_name,student_email,student_phone,course_id) values ($1,$2,$3,$4)',
    values: [name, email, phone, courseId],
  };
  return connection.query(sql);
};

module.exports = addStudent;
