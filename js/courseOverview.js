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
  // let arrayOfContent = ['TABLE', 'HEADER', 'IMG', 'P']
  localStorage.setItem('data', JSON.stringify(HTMLBasicContent))
  window.location.href = '../html-course/content-page.html'
}

let courseChallenges = () => {
  // let arrayOfContent = ['CHALLENGES', 'CHALLENGES', 'CHALLENGES', 'CHALLENGES']
  localStorage.setItem('data', JSON.stringify(challenges))
  window.location.href = '../html-course/content-page.html'
}

let courseHtml5 = () => {
  // let arrayOfContent = ['HTML5', 'HTML5', 'HTML5', 'HTML5']
  localStorage.setItem('data', JSON.stringify(HTML5Content))
  window.location.href = '../html-course/content-page.html'
}

// ==================== DATA =============================
const overViewContent = {
  STRUCTURE: {
    title: 'The Web Structure',
    description:
      'The ability to code using HTML is essential for any web professional. Acquiring this skill should be the starting point for anyone who is learning how to create content for the web. ',
    code: "&ltp> I'm a paragraph &lt/p>",
    note:
      'This course is a combination of interactive quizzes and exercises to facilitate speed and quality of learning. Tap the Play button to go to your first quiz!',
    test: {
      question: 'Which tag is used to define a paragraph?',
      options: ['&ltp> ', '&lta>', '&ltbody>', '&lthead>'],
      right: '&ltp>'
    }
  },

  HTML: {
    title: 'The &lthtml> Tag',
    description:
      'Although various versions have been released over the years, HTML basics remain the same. The structure of an HTML document has been compared with that of a sandwich. As a sandwich has two slices of bread, the HTML document has opening and closing HTML tags. These tags, like the bread in a sandwich, surround everything else:',
    code: '&lthtml>....&lt/html>',
    note: 'Everything in an HTML document is surrounded by the &lthtml> tag.',
    test: [
      {
        question: 'Which is an opening html tag:',
        options: ['&lthtml>', '&lt/html>', '&lthead>', '&ltp>'],
        right: '&lthtml>'
      }
    ]
  },

  HEAD: {
    title: 'The &lthead> Tag',
    description:
      "Immediately following the opening HTML tag, you'll find the head of the document, which is identified by opening and closing head tags.The head of an HTML file contains all of the non-visual elements that help make the page work.",
    code: '&lthtml>&lthead>....&lt/head>&lt/html>',
    note: 'The head section elements will be discussed later.',
    test: [
      {
        question:
          'Which element is placed between the &lthtml> tag and the &ltbody> tag. ',
        options: ['&ltlink> ', '&lta>', '&lthead>', '&lttitle>'],
        right: '&lthead>'
      }
    ]
  },

  BODY: {
    title: 'The &ltbody> Tag',
    description:
      'The body tag follows the head tag.All visual-structural elements are contained within the body tag. Headings, paragraphs, lists, quotes, images, and links are just a few of the elements that can be contained within the body tag.',
    code:
      'Basic Structure. &lthtml>&lthead>&lt/head>&ltbody>&lt/body>&lt/html>',
    note: 'The &ltbody> tag defines the main content of the HTML document.',
    test: [
      {
        question: 'Which tag defines the main content of the HTML document.',
        options: ['&ltaudio>', '&ltbody>', '&ltscript>', '&ltiframe>'],
        right: '&ltbody>'
      }
    ]
  },

  HTML_FILE: {
    title: 'The HTML File',
    description:
      "HTML files are text files, so you can use any text editor to create your first webpage. There are some very nice HTML editors available; you can choose the one that works for you. For now let's write our examples in Notepad.",
    note:
      'You can run, save, and share your HTML codes on our Code Playground, without installing any additional software.',
    test: [
      {
        question: 'What type of editor is used to edit HTML code?',
        options: ['Text Editor', 'Photo Editor'],
        right: 'Text Editor'
      }
    ]
  },

  TITLE: {
    title: 'The &lttitle> Tag',
    description:
      'To place a title on the tab describing the web page, add a &lttitle> element to your head section &lthtml>',
    code:
      '&lthtml>&lthead>&lttitle>first page&lt/title>&lt/head>&ltbody>This is a line of text. &lt/body>&lt/html>',
    note:
      'The title element is important because it describes the page and is used by search engines.',
    test: [
      {
        question: 'Where should you put the title tag?',
        options: [
          'Between the body tags',
          'Between the head tags',
          'After the closing html tag',
          'Before the html tag'
        ],
        right: 'Between the head tags'
      }
    ]
  }
}

const HTMLBasicContent = {
  Stage1: {
    title: 'The &ltp> Element',
    description:
      'To create a paragraph, simply type in the &ltp> element with its opening and closing tags:',
    code:
      '&lthtml>&lthead>&lttitle>first page&lt/title>&lt/head>&ltbody>&ltp>This is a paragraph. &lt/p>&ltp>This is another paragraph. &lt/p>&lt/body>&lt/html>',
    note:
      'Browsers automatically add an empty line before and after a paragraph.',
    test: {
      question: 'Which tag is used to define a closing paragraph element?',
      options: ['/&ltp> ', '&lta>', '&ltbody>', '&lthead>'],
      right: '&lt/p>'
    }
  },

  Stage2: {
    title: 'Single Line Break',
    description:
      'Use the &ltbr /> tag to add a single line of text without starting a new paragraph:',
    code: '  &ltp>This is &ltbr /> a line break &lt/p>',
    note: 'The &ltbr /> element is an empty HTML element. It has no end tag.',
    test: [
      {
        question: 'Which is a self closing html tag:',
        options: ['&lthtml>', '&ltbr />', '&lt/head>', '&ltp>'],
        right: '&ltbr />'
      }
    ]
  },

  Stage3: {
    title: 'Formatting Elements',
    description:
      'In HTML, there is a list of elements that specify text style.Formatting elements were designed to display special types of text:',
    code: '  &ltp>&ltstrong> strong text &lt/strong>&lt/p>',
    note: 'The &ltstrong> tag is a phrase tag. It defines important text.',
    test: [
      {
        question: 'Which two tags below make the text visually bold? ',
        options: ['sub and sup', 'ins and del', 'b and strong', 'i and em'],
        right: '&ltb and strong>'
      }
    ]
  },

  Stage4: {
    title: 'HTML Headings',
    description:
      'HTML includes six levels of headings, which are ranked according to importance. These are &lth1>, &lth2>, &lth3>, &lth4>, &lth5>, and &lth6>.The following code defines all of the headings:',
    code:
      ' &lth1>This is heading 1&lt/h1>&lth2>This is heading 2&lt/h2>&lth3>This is heading 3&lt/h3>&lth4>This is heading 4&lt/h4>&lth5>This is heading 5&lt/h5>&lth6>This is heading 6&lt/h6>',
    note:
      'It is not recommended that you use headings just to make the text big or bold, because search engines use headings to index the web page structure and content.',
    test: [
      {
        question: 'What tags are used to indicate headings?',
        options: ['header', 'h1 - h6', 'head', 'heading'],
        right: 'h1 - h6'
      }
    ]
  }
}

const challenges = {
  Stage1: {
    test1: {
      question: 'Which tag is used to define a  paragraph element?',
      options: ['&ltp> ', '&lta>', '&ltbody>', '&lthead>'],
      right: '&ltp>'
    },

    test2: {
      question: 'Which is an opening html tag:',
      options: ['&lthtml>', '&lt/html>', '&lthead>', '&ltp>'],
      right: '&lthtml>'
    }
  },

  Stage2: {
    test1: {
      question:
        'Which element is placed between the &lthtml> tag and the &ltbody> tag. ',
      options: ['&ltlink> ', '&lta>', '&lthead>', '&lttitle>'],
      right: '&lthead>'
    },

    test2: {
      question: 'Which tag defines the main content of the HTML document.',
      options: ['&ltaudio>', '&ltbody>', '&ltscript>', '&ltiframe>'],
      right: '&ltbody>'
    }
  },

  Stage3: {
    test1: {
      question: 'What type of editor is used to edit HTML code?',
      options: ['Text Editor', 'Photo Editor'],
      right: 'Text Editor'
    },

    test2: {
      question: 'Where should you put the title tag?',
      options: [
        'Between the body tags',
        'Between the head tags',
        'After the closing html tag',
        'Before the html tag'
      ],
      right: 'Between the head tags'
    }
  },

  Stage4: {
    test1: {
      question: 'Which tag is used to define a closing paragraph element?',
      options: ['/&ltp> ', '&lta>', '&ltbody>', '&lthead>'],
      right: '&lt/p>'
    },

    test2: {
      question: 'Which is a self closing html tag:',
      options: ['&lthtml>', '&ltbr />', '&lt/head>', '&ltp>'],
      right: '&ltbr />'
    }
  },

  Stage5: {
    test1: {
      question: 'Which two tags below make the text visually bold? ',
      options: ['sub and sup', 'ins and del', 'b and strong', 'i and em'],
      right: '&ltb and strong>'
    },

    test2: {
      question: 'What tags are used to indicate headings?',
      options: ['header', 'h1 - h6', 'head', 'heading'],
      right: 'h1 - h6'
    }
  }
}

const HTML5Content = {
  Stage1: {
    title: 'What is New in HTML5?',
    description: 'The DOCTYPE declaration for HTML5 is very simple:',
    code: '&lt!DOCTYPE html>',
    note: 'The default character encoding in HTML5 is UTF-8.',
    test: {
      question: 'The default character encoding in HTML5 is ?',
      options: ['UTF-8', 'UTF-12', 'UTC-8', 'none of them'],
      right: 'UTF-8'
    }
  },

  Stage2: {
    title: 'New HTML5 Elements',
    description:
      'The most interesting new HTML5 elements are: New semantic elements like &ltheader>, &ltfooter>, &ltarticle>, and &ltsection>.New attributes of form elements like number, date, time, calendar, and range.New graphic elements: &ltsvg> and &ltcanvas>.New multimedia elements: &ltaudio> and &ltvideo>.',
    note:
      'In the next chapter, HTML5 Support, you will learn how to "teach" older browsers to handle "unknown" (new) HTML elements.',
    test: [
      {
        question: 'Which of the following is HTML5 element? ',
        options: ['&ltsvg> ', '&lta>', '&lthead>', '&lttitle>'],
        right: '&ltsvg>'
      }
    ]
  },

  Stage3: {
    title: 'HTML5 Semantic Elements',
    description:
      'A semantic element clearly describes its meaning to both the browser and the developer.',
    note:
      'Example for a newspaper: The sport &ltarticle> in the sport section, may have a technical section in each &ltarticle>.',
    test: [
      {
        question: 'Which of the following is new semantic HTML5 element?:',
        options: ['&lthtml>', '&lt/html>', '&ltarticle>', '&ltp>'],
        right: '&ltarticle>'
      }
    ]
  }
}
