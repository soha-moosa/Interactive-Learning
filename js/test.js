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
    console.log('IM here')
    array.map(topic => {
      console.log()
      localStorage.setItem('test-question', JSON.stringify(topic.test))
      document.getElementById('quizDiv').innerHTML = `
                <p class="black-text">${topic.question}</p>
                 <form>
    <p>
      <label>
        <input name="group1" type="radio" checked />
        <span class="black-text">${topic.options[0]}</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" />
        <span>Yellow</span>
      </label>
    </p>
    <p>
      <label>
        <input class="with-gap" name="group1" type="radio"  />
        <span>Green</span>
      </label>
    </p>
    <p>
      <label>
        <input name="group1" type="radio" disabled="disabled" />
        <span>Brown</span>
      </label>
    </p>
  </form>
        `
    })
  }
}

const setTestContent = () => {
  let testArray = []
  const test = JSON.parse(localStorage.getItem('test-question'))
  console.log(test)
  testArray.push(test)
  printToDom(testArray, 'test-questions')
}
