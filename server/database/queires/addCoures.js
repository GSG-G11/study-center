const connection = require('../config/connection');

const addCourses = (name, hours) => {
  const sql = {
    text: 'insert into courses (course_name,course_hour) values ($1,$2)',
    values: [name, hours],
  };
  return connection.query(sql);
};

module.exports = addCourses;
