let logout = () => {
    localStorage.removeItem('student')
    window.location.href = '../../../index.html'
  }
  function hello(){
    window.location.href= "test.html";
  }
  let authCheckAndShowContent = () => {
    if (!localStorage.getItem('student')) {
      window.location.href = '../../../index.html'
    }
  
    if (JSON.parse(localStorage.getItem('data'))) {
      const data = JSON.parse(localStorage.getItem('data'))
  
      var propValue;
      for (var propName in data) {
        propValue = data[propName]
        console.log(propName,propValue);
        console.log(propValue.title);
        console.log(propValue.description);

        document.getElementById('title').innerHTML = propValue.title;
        document.getElementById('description').innerHTML = propValue.title

      }
    //   for (key in data) {
    //     document.getElementById('courseContentDiv').innerHTML += '<div class="col l4 s12 m12"><div class="card black-grey darken-1"><div class="card-content black-text"><h1 class="card-title">' + data + '</h1></div></div>'
    //     console.log(key, data[key])
    //   }
      // printToDom(topicsOverview)
    } else if (JSON.parse(localStorage.getItem('data'))) {
      const topicsHtmlBasics = JSON.parse(localStorage.getItem('data'))
  
      for (key in topicsOverview) {
        console.log(key, topicsOverview[key])
      }
  
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
                  </div>     `
    })
  }