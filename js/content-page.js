let logout = () => {
  localStorage.removeItem('student')
  window.location.href = '../../../index.html'
}

let authCheckAndShowContent = () => {
  if (!localStorage.getItem('student')) {
    window.location.href = '../../../index.html'
  }

  if (JSON.parse(localStorage.getItem('data'))) {
    const topicsOverview = JSON.parse(localStorage.getItem('data'))

    for (key in topicsOverview) {
      console.log(key, topicsOverview[key])
    }
    // printToDom(topicsOverview)
  } else if (JSON.parse(localStorage.getItem('data'))) {
    const topicsHtmlBasics = JSON.parse(localStorage.getItem('data'))

    // printToDom(topicsHtmlBasics)
  } else if (JSON.parse(localStorage.getItem('data'))) {
    const topicsChallenges = JSON.parse(localStorage.getItem('data'))

    // printToDom(topicsChallenges)
  } else if (JSON.parse(localStorage.getItem('data'))) {
    const topicsHTML5 = JSON.parse(localStorage.getItem('data'))

    // printToDom(topicsHTML5)
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
                </div>
    `
  })
}
