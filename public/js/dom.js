const addCourseBtn = document.querySelector('.add-course-btn');
const addStudentBtn = document.querySelector('.add-student-btn');
const courseForm = document.querySelector('.courses-form');
const studentForm = document.querySelector('.students-form');
const closeCourseForm = document.querySelector('.close-course-form');
const closeStudentForm = document.querySelector('.close-student-form');
const select = document.querySelector('.select');
const tBody = document.querySelector('tbody');
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

const students = (data) => {
  data.forEach((ele) => {
    const tr = document.createElement('tr');
    const studentName = document.createElement('td');
    console.log(ele.student_name);
    studentName.textContent = ele.student_name;
    const couresName = document.createElement('td');
    couresName.textContent = ele.course_name;
    const deleteIcon = document.createElement('td');
    deleteIcon.classList = 'delete-student';
    const icon = document.createElement('i');
    icon.classList = 'fas fa-trash-alt';
    deleteIcon.appendChild(icon);
    tr.append(studentName, couresName, deleteIcon);
    tBody.appendChild(tr);
  });
};
fetch('/getCourseStudent')
  .then((res) => res.json())
  .then((data) => students(data));
