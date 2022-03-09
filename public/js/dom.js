const addCourseBtn = document.querySelector('.add-course-btn');
const addStudentBtn = document.querySelector('.add-student-btn');
const courseForm = document.querySelector('.courses-form');
const studentForm = document.querySelector('.students-form');
const closeCourseForm = document.querySelector('.close-course-form');
const closeStudentForm = document.querySelector('.close-student-form');
const select = document.querySelector('.select');
const tBody = document.querySelector('tbody');
// display course form
addCourseBtn.addEventListener('click', () => {
  courseForm.style.display = 'block';
});
// display student form
addStudentBtn.addEventListener('click', () => {
  studentForm.style.display = 'block';
});
// close course form
closeCourseForm.addEventListener('click', () => {
  courseForm.style.display = 'none';
});
// close student form
closeStudentForm.addEventListener('click', () => {
  studentForm.style.display = 'none';
});
// create options for select tag
const options = (data) => {
  data.forEach((coures) => {
    const option = document.createElement('option');
    option.value = coures.course_id;
    option.textContent = coures.course_name;
    select.appendChild(option);
  });
};
// fetch data in courses table and callback for options function to creat option for course name
fetch('/getCourses')
  .then((res) => res.json())
  .then((data) => options(data));

/* ****  create function to add click for icon delete and
 send the id  for delete student to delete from students table *** */
const deletedStudent = (element) => {
  element.addEventListener('click', () => {
    const studentId = element.getAttribute('id');
    fetch('/deleteStudent', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: studentId }),
    });
    element.parentElement.remove();
  });
};
/* ****  create function to render data (student name ,course name , student id) *** */
const students = (data) => {
  data.forEach((ele) => {
    const tr = document.createElement('tr');
    const studentName = document.createElement('td');
    studentName.textContent = ele.student_name;
    const couresName = document.createElement('td');
    couresName.textContent = ele.course_name;
    const deleteIcon = document.createElement('td');
    deleteIcon.classList = 'delete-student';
    deleteIcon.id = ele.student_id;
    const icon = document.createElement('i');
    icon.classList = 'fas fa-trash-alt';
    deleteIcon.appendChild(icon);
    tr.append(studentName, couresName, deleteIcon);
    tBody.appendChild(tr);
  });
  // loop for delete icon and call deleted student function
  document.querySelectorAll('.delete-student').forEach((deleteStudent) => {
    deletedStudent(deleteStudent);
  });
};

// fetch data (coures name ,student name , student id) to render table
fetch('/getCourseStudent')
  .then((res) => res.json())
  .then((data) => students(data));
