// window.onload = function() {
//   console.log('inside this ')

//   $(document).ready(function() {
//     $('.modal').open()
//   })
// }

function fetchStudentDescription() {
  const student = JSON.parse(localStorage.getItem('student'))
  const heading_user_name = document.getElementById('heading_user_name')
  heading_user_name.innerHTML += ` ${student.name}!`
}

fetchStudentDescription()
