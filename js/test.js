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
    const item = localStorage.getItem('test-content')
    console.log(data, item)
    let content = []
    for (let key in data) {
      if (key === item) {
        content.push(data[key])
        printToDom(content, 'print-content')
      }
    }
  }
}

// object => loop

// looping on object

let printToDom = (array, flag) => {
  if (flag === 'print-content') {
    array.map(topic => {
      localStorage.setItem('test-question', JSON.stringify(topic.test))
      document.getElementById('quizDiv').innerHTML = `
        <h3 class="content" id="title">${topic.title}</h3>
            <p class="content" id="description">
               ${topic.description}
            </p>
            <code class="container center purple-text grey lighten-2"> ${
              topic.code
            }</code>
            <div style="margin-left: 70%; margin-top:2%;">
                <a href="ide.html" class="waves-effect pink waves-light btn"><i class="material-icons right">code</i>Try
                    Yourself</a>
            </div>

            <div style="margin-top:10%; padding: 2%;" class="center container yellow lighten-2">
                <p class="black-text">
                    ${topic.note}
                </p>
            </div>

            <div style="margin-top:2%;" class="container center">
                <button class="btn-floating btn-large waves-effect waves-light pink" onclick="setTestContent()"><i class="material-icons">play_arrow</i></button>
                   </div>

        `
    })
  } else if (flag === 'test-questions') {
    // console.log('Array : ', array)
    if (Array.isArray(array[0])) {
      let newArray = array[0]
      newArray.map(topic => {
        console.log('Im here: ', topic)
        localStorage.setItem('test-question', JSON.stringify(topic.test))
        // const [ options ] =
        document.getElementById('quizDiv').innerHTML = `
                <div class="container">
                <p class="black-text">${topic.question}</p>
                 <form>
                        <p>
                          <label>
                            <input name="group1" type="radio" checked value="${
                              topic.options[0]
                            }" />
                            <span class="black-text">${topic.options[0]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio" value="${
                              topic.options[1]
                            }"/>
                            <span class="black-text">${topic.options[1]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input class="with-gap" name="group1" type="radio" value="${
                              topic.options[2]
                            }"  />
                            <span  class="black-text">${topic.options[2]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio" value="${
                              topic.options[3]
                            }" />
                            <span  class="black-text">${topic.options[3]}</span>
                          </label>
                        </p>

                        <button type="button" class="btn pink" style="margin-bottom: 1rem;" onClick="calculateTest('${
                          topic.right
                        }')">Next</button>
  </form>
  </div>
        `
      })
    } else {
      array.map(topic => {
        console.log('Im here babyyy: ', topic)
        localStorage.setItem('test-question', JSON.stringify(topic.test))
        // const [ options ] =
        document.getElementById('quizDiv').innerHTML = `
                <div class="container">
                <p class="black-text">${topic.question}</p>
                 <form>
                        <p>
                          <label>
                            <input name="group1" type="radio" checked value="${
                              topic.options[0]
                            }" />
                            <span class="black-text">${topic.options[0]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio" value="${
                              topic.options[1]
                            }"/>
                            <span class="black-text">${topic.options[1]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input class="with-gap" name="group1" type="radio" value="${
                              topic.options[2]
                            }"  />
                            <span  class="black-text">${topic.options[2]}</span>
                          </label>
                        </p>
                        <p>
                          <label>
                            <input name="group1" type="radio" value="${
                              topic.options[3]
                            }" />
                            <span  class="black-text">${topic.options[3]}</span>
                          </label>
                        </p>

                        <button type="button" class="btn pink" style="margin-bottom: 1rem;" onClick="calculateTest('${
                          topic.right
                        }')">Next</button>
  </form>
  </div>
        `
      })
    }
  }
}

const setTestContent = () => {
  let testArray = []
  const test = JSON.parse(localStorage.getItem('test-question'))
  console.log(test)
  testArray.push(test)
  printToDom(testArray, 'test-questions')
}

function calculateTest(right) {
  let radios = document.getElementsByName('group1')
  // console.log(right)
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log('inside if', radios[i].value, right)
      if (radios[i].value.trim() === right.trim()) {
        console.log('You won baby!!!!')
        swal('Yayy 🤗', 'You have passed the test', 'success')
      } else {
        console.log('Sorry lost!!')
        swal('😟', 'You Failed', 'error')
      }
    }
  }
}
