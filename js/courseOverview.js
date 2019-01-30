let authCheck = () => {
  if (!localStorage.getItem('student')) {
    window.location.href = '../../../index.html'
  }
}

let courseOverview = () => {
  localStorage.setItem('data', JSON.stringify(overViewContent))
  window.location.href = '../html-course/content-page.html'
}

let courseHtmlCourse = () => {
  let arrayOfContent = ['TABLE', 'HEADER', 'IMG', 'P']
  localStorage.setItem('data', JSON.stringify(arrayOfContent))
  window.location.href = '../html-course/content-page.html'
}

let courseChallenges = () => {
  let arrayOfContent = ['CHALLENGES', 'CHALLENGES', 'CHALLENGES', 'CHALLENGES']
  localStorage.setItem('data', JSON.stringify(arrayOfContent))
  window.location.href = '../html-course/content-page.html'
}

let courseHtml5 = () => {
  let arrayOfContent = ['HTML5', 'HTML5', 'HTML5', 'HTML5']
  localStorage.setItem('data', JSON.stringify(arrayOfContent))
  window.location.href = '../html-course/content-page.html'
}

// ==================== DATA =============================

const overViewContent = {
  HTML: {
    title: 'HTML TILE',
    description: 'Some decscription here',
    test: {
      question: 'What is HTML ? ',
      options: ['Web programming language? ', 'hyper text markup language..'],
      right: 'hyper text markup language..'
    }
  },

  BODY: {
    title: 'BODY',
    description: 'Some decscription here',
    test: [
      {
        question: 'What is HTML ? ',
        options: ['Web programming language? ', 'hyper text markup language..'],
        right: 'hyper text markup language..'
      }
    ]
  },

  HEAD: {
    title: 'HEAD',
    description: 'Some decscription here',
    test: [
      {
        question: 'What is HEAD ? ',
        options: ['Web programming language? ', 'hyper text markup language..'],
        right: 'hyper text markup language..'
      }
    ]
  },

  TITLE: {
    title: 'TITLE',
    description: 'Some decscription here',
    test: [
      {
        question: 'What is TITLE ? ',
        options: ['Web programming language? ', 'hyper text markup language..'],
        right: 'hyper text markup language..'
      }
    ]
  }
}
