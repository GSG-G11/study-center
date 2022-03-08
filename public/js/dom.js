const addCourseBtn = document.querySelector('.add-course-btn');
const addStudentBtn = document.querySelector('.add-student-btn');
const courseForm = document.querySelector('.courses-form');
const studentForm = document.querySelector('.students-form');
const closeCourseForm = document.querySelector('.close-course-form');
const closeStudentForm = document.querySelector('.close-student-form');
const select = document.querySelector('.select');
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

const options = (data) => {
  data.forEach((coures) => {
    const option = document.createElement('option');
    option.value = coures.course_id;
    option.textContent = coures.course_name;
    select.appendChild(option);
  });
};
fetch('/getCourses')
  .then((res) => res.json())
  .then((data) => options(data));
