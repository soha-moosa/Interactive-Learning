const url = `http://localhost:3000/student/register-student`
const form = document.getElementById('signupForm')

// handlers

form.addEventListener('submit', e => {
  e.preventDefault()
  const name = document.getElementById('name').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const age = document.getElementById('age').value
  const instituteName = document.getElementById('instituteName').value

  // gender checking
  let gender
  const radios = document.getElementsByName('gender')
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      gender = radios[i].value
    }
  }
  const body = {
    name,
    email,
    password,
    age,
    instituteName,
    gender
  }

  signUpStudent(body)
})

const signUpStudent = student => {
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(student => {
      if (student.message === 'Some error occured!') {
        // show tooltip here
        swal('Sorry!', 'Some error occured!', 'error')
      } else {
        localStorage.setItem('student', JSON.stringify(student))
        window.location.replace('../html/dashboard.html')
      }
    })
}
