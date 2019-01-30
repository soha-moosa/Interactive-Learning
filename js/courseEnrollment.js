const htmlCourseEnrollmentButton = document.getElementById('html_enrollment')
const cssCourseEnrollmentButton = document.getElementById('css_enrollment')
const jsEnrollmentButton = document.getElementById('javascript_enrollment')
const true_flag_button = document.getElementById('true_flag_button')
const url = 'http://localhost:3000/student/register-course-for-me'
htmlCourseEnrollmentButton.addEventListener('click', e => {
  const course = {
    _id: '5c4cb4a7e7179a090e0a8242',
    courseName: 'HTML'
  }
  localStorage.setItem('courseToBeEnrolled', JSON.stringify(course))
})

true_flag_button.addEventListener('click', () => {
  const course = JSON.parse(localStorage.getItem('courseToBeEnrolled'))
  const student = JSON.parse(localStorage.getItem('student'))

  console.log(course, student)

  fetch(`${url}/${student._id}`, {
    method: 'POST',
    body: JSON.stringify(course),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(studentObject => {
      if (studentObject.message === 'success') {
        window.location.href =
          '../html/courses/html-course/courseContentOverview.html'
      } else {
        swal('Sorry 😔', 'Some error occured 😐', 'error')
      }
    })
  // fetch request here , response will navigate to the html content page .
})
