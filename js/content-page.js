let logout = () => {
  localStorage.removeItem('student')
  window.location.href = '../../../index.html'
}
function hello() {
  window.location.href = 'test.html'
}
let authCheckAndShowContent = () => {
  if (!localStorage.getItem('student')) {
    window.location.href = '../../../index.html'
  }

  if (JSON.parse(localStorage.getItem('data'))) {
    const data = JSON.parse(localStorage.getItem('data'))
    printToDom()
  }
}
// object => loop

// looping on object

let printToDom = array => {
  array.map(topic => {
    document.getElementById('courseContentDiv').innerHTML += `  
            <div class="col l4 s12 m12">
                    <div class="card black-grey darken-1">
                        <div class="card-content black-text">
                            <h1 class="card-title">${topic}</h1>
                    </div>
                </div>     `
  })
}
