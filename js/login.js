const url = `http://localhost:3000/student/login-student`
const form = document.getElementById('loginForm')

// handlers

form.addEventListener('submit', e => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const body = {
    email,
    password
  }
  loginStudent(body)
})

const loginStudent = student => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(student => {
      if (student.message === 'No user found!') {
        // show tooltip here
        swal('Sorry!', 'No user found.', 'error')
      } else {
        localStorage.setItem('student', JSON.stringify(student))
        window.location.replace('../html/greetingsPage.html')
      }
    })
}
