const connection = require('../config/connection');

const deleteStudent = (id) => {
  const sql = {
    text: 'delete from students where student_id = ($1)',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = deleteStudent;
