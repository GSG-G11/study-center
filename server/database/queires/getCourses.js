const connection = require('../config/connection');

const getCourses = () => {
  const sql = {
    text: 'select * from courses ',
    values: [],
  };
  return connection.query(sql);
};

module.exports = getCourses;
