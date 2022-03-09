/* eslint-disable no-undef */
const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const {
  getCourses,
  addCourses,
  addStudent,
  getCourseStudent,
} = require('../database/queires');

beforeEach(() => dbBuild());

test('Test get courses', () => getCourses().then((res) => expect(res.rowCount).toBe(5)));
test('Test get first course', () => getCourses().then((res) => expect(res.rows[0]).toEqual({ course_id: 1, course_name: 'Graphic Desig', course_hour: 50 })));

test('Test post course', () => addCourses('Express', 50).then((res) => { expect(res.rowCount).toBe(1); }));

test('Test get student and course', () => getCourseStudent().then(({ rowCount }) => expect(rowCount).toBe(7)));

test('Test post student', () => addStudent('israa', 'israa@gmail.com', '05900000', 2).then((res) => { expect(res.rowCount).toBe(1); }));

afterAll(() => connection.end());
