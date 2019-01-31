const htmlCourseEnrollmentButton = document.getElementById('html_enrollment')
const cssCourseEnrollmentButton = document.getElementById('css_enrollment')
const jsEnrollmentButton = document.getElementById('javascript_enrollment')
const true_flag_button = document.getElementById('true_flag_button')
const dynamicTogglerForAnchor = document.getElementById('dynamic-enroll-toggle')
const url = 'http://localhost:8080/student/register-course-for-me'

htmlCourseEnrollmentButton.addEventListener('click', e => {
  const course = {
    courseId: '5c4cb4a7e7179a090e0a8242',
    courseName: 'HTML',
    obtainedMarks: 0,
    totalMarks: 10,
    progress: 0
  }
  localStorage.setItem('courseToBeEnrolled', JSON.stringify(course))
})

const course = JSON.parse(localStorage.getItem('courseToBeEnrolled'))
const student = JSON.parse(localStorage.getItem('student'))
if (JSON.parse(localStorage.getItem('student')).courses.length === 1) {
  dynamicTogglerForAnchor.innerHTML = `
  <a class="waves-effect waves-light btn-large green modal-trigger" href="./courses/html-course/courseContentOverview.html"
   >Continue</a>
  `
} else {
  true_flag_button.addEventListener('click', () => {
    let course = JSON.parse(localStorage.getItem('courseToBeEnrolled'))
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
  })
}
