let logout = () => {
  localStorage.removeItem('student')
  window.location.href = '../../../index.html'
}

let authCheckAndShowContent = () => {
  if (!localStorage.getItem('student')) {
    window.location.href = '../../../index.html'
  }

  let titles = []
  if (JSON.parse(localStorage.getItem('data'))) {
    const topicsOverview = JSON.parse(localStorage.getItem('data'))

    for (key in topicsOverview) {
      titles.push(key)
    }

    printToDom(titles)
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

let printToDom = titles => {
  titles.map(title => {
    document.getElementById('courseContentDiv').innerHTML += `  
            <div class="col l4 s12 m12">
                    <div class="card black-grey darken-1">
                        <div class="card-content black-text">
                            <h1 class="card-title">${title}</h1>
                    </div>
                </div>
    `
  })
}
