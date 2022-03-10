const addCourseBtn = document.querySelector('.add-course-btn');
const addStudentBtn = document.querySelector('.add-student-btn');
const courseForm = document.querySelector('.courses-form');
const studentForm = document.querySelector('.students-form');
const closeCourseForm = document.querySelector('.close-course-form');
const closeStudentForm = document.querySelector('.close-student-form');
const select = document.querySelector('.select');
const courseName = document.querySelector('.course_name');
const noStudent = document.querySelector('.no-student');
const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
// delete child element for parent element
const deleteChild = (element) => {
  let child = element.lastElementChild;
  while (child) {
    element.removeChild(child);
    child = element.lastElementChild;
  }
};
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
    if (tBody.childNodes.length === 1) {
      table.style.display = 'none';
      noStudent.style.display = 'block';
    }
  });
};
/* ****  create function to render data (student name ,course name , student id) *** */
const students = (data) => {
  if (data.length !== 0) {
    noStudent.style.display = 'none';
    table.style.display = 'block';
    deleteChild(tBody);
    data.forEach((ele) => {
      const tr = document.createElement('tr');
      const studentName = document.createElement('td');
      studentName.textContent = ele.student_name;
      const deleteIcon = document.createElement('td');
      deleteIcon.classList = 'delete-student';
      deleteIcon.id = ele.student_id;
      const icon = document.createElement('i');
      icon.classList = 'fas fa-trash-alt';
      deleteIcon.appendChild(icon);
      tr.append(studentName, deleteIcon);
      tBody.appendChild(tr);
    });
    // loop for delete icon and call deleted student function
    document.querySelectorAll('.delete-student').forEach((deleteStudent) => {
      deletedStudent(deleteStudent);
    });
  } else {
    table.style.display = 'none';
    noStudent.style.display = 'block';
  }
};
// create options for select tag
const options = (data) => {
  data.forEach((coures) => {
    const option = document.createElement('option');
    option.value = coures.course_id;
    option.textContent = coures.course_name;
    select.appendChild(option);
  });
};
// create options for select tag
const spans = (data) => {
  data.forEach((coures) => {
    const span = document.createElement('span');
    span.id = coures.course_id;
    span.classList = 'name-course';
    span.textContent = coures.course_name;
    courseName.appendChild(span);
  });
  const coureses = document.querySelectorAll('.name-course');
  document.addEventListener('click', (e) => {
    // eslint-disable-next-line no-param-reassign
    coureses.forEach((course) => { course.style.color = 'var(--secondaryColor)'; });
    if (e.target.getAttribute('class') === 'name-course') {
      e.target.style.color = 'var(--addColor)';
      const courseId = e.target.getAttribute('id');
      fetch('/postStudent', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: courseId }),
      })
        .then((res) => res.json())
        .then((dataRes) => students(dataRes));
    }
  });
};
// fetch data in courses table and callback for options function to creat option for course name
fetch('/getCourses')
  .then((res) => res.json())
  .then((data) => { options(data); spans(data); });
