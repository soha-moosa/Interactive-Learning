let authCheck = () => {
    if (!localStorage.getItem('student')) {
        window.location.href = '../../../index.html';
    }

}

let courseOverview = () => {
    let arrayOfContent = ['HTML', 'BODY', 'HEAD', 'TITLE'];
    localStorage.setItem('data', JSON.stringify(arrayOfContent));
    window.location.href = "../html-course/content-page.html";
}


let courseHtmlCourse = () => {
    let arrayOfContent = ['TABLE', 'HEADER', 'IMG', 'P'];
    localStorage.setItem('data', JSON.stringify(arrayOfContent));
    window.location.href = "../html-course/content-page.html";
}

let courseChallenges = () => {
    let arrayOfContent = ['CHALLENGES', 'CHALLENGES', 'CHALLENGES', 'CHALLENGES'];
    localStorage.setItem('data', JSON.stringify(arrayOfContent));   
    window.location.href = "../html-course/content-page.html";
}

let courseHtml5 = () => {
    let arrayOfContent = ['HTML5', 'HTML5', 'HTML5', 'HTML5'];
    localStorage.setItem('data', JSON.stringify(arrayOfContent));   
    window.location.href = "../html-course/content-page.html";
}