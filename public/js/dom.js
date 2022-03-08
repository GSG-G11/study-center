const addCourseBtn = document.querySelector('.add-course-btn');
const addStudentBtn = document.querySelector('.add-student-btn');
const courseForm = document.querySelector('.courses-form');
const studentForm = document.querySelector('.students-form');
const closeCourseForm = document.querySelector('.close-course-form');
const closeStudentForm = document.querySelector('.close-student-form');
addCourseBtn.addEventListener('click', () => {
  courseForm.style.display = 'block';
});

addStudentBtn.addEventListener('click', () => {
  studentForm.style.display = 'block';
});

closeCourseForm.addEventListener('click', () => {
  courseForm.style.display = 'none';
});

closeStudentForm.addEventListener('click', () => {
  studentForm.style.display = 'none';
});
