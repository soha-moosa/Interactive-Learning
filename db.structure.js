const overViewContent = {
  Structure: {
    title: 'The Web Structure',
    description:
      'The ability to code using HTML is essential for any web professional. Acquiring this skill should be the starting point for anyone who is learning how to create content for the web. ',
    code: "<p> I'm a paragraph </p>",
    note:
      'This course is a combination of interactive quizzes and exercises to facilitate speed and quality of learning. Tap the Play button to go to your first quiz!',
    test: {
      question: 'Which tag is used to define a paragraph?',
      options: ['<p> ', '<a>', '<body>', '<head>'],
      right: '<p>'
    }
  },

  HTML: {
    title: 'The <html> Tag',
    description:
      'Although various versions have been released over the years, HTML basics remain the same. The structure of an HTML document has been compared with that of a sandwich. As a sandwich has two slices of bread, the HTML document has opening and closing HTML tags. These tags, like the bread in a sandwich, surround everything else:',
    code: '<html>....</html>',
    note: 'Everything in an HTML document is surrounded by the <html> tag.',
    test: [
      {
        question: 'Which is an opening html tag:',
        options: ['<html>', '</html>', '<head>', '<p>'],
        right: '<html>'
      }
    ]
  },

  HEAD: {
    title: 'The <head> Tag',
    description:
      "Immediately following the opening HTML tag, you'll find the head of the document, which is identified by opening and closing head tags.The head of an HTML file contains all of the non-visual elements that help make the page work.",
    code: '<html><head>....</head></html>',
    note: 'The head section elements will be discussed later.',
    test: [
      {
        question:
          'Which element is placed between the <html> tag and the <body> tag. ',
        options: ['<link> ', '<a>', '<head>', '<title>'],
        right: '<head>'
      }
    ]
  },

  BODY: {
    title: 'The <body> Tag',
    description:
      'The body tag follows the head tag.All visual-structural elements are contained within the body tag. Headings, paragraphs, lists, quotes, images, and links are just a few of the elements that can be contained within the body tag.',
    code: 'Basic Structure. <html><head></head><body></body></html>',
    note: 'The <body> tag defines the main content of the HTML document.',
    test: [
      {
        question: 'Which tag defines the main content of the HTML document.',
        options: ['<audio>', '<body>', '<script>', '<iframe>'],
        right: '<body>'
      }
    ]
  },

  FILES: {
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
    title: 'The <title> Tag',
    description:
      'To place a title on the tab describing the web page, add a <title> element to your head section <html>',
    code:
      '<html><head><title>first page</title></head><body>This is a line of text. </body></html>',
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
  Paragraphs: {
    title: 'The <p> Element',
    description:
      'To create a paragraph, simply type in the <p> element with its opening and closing tags:',
    code:
      '<html><head><title>first page</title></head><body><p>This is a paragraph. </p><p>This is another paragraph. </p></body></html>',
    note:
      'Browsers automatically add an empty line before and after a paragraph.',
    test: {
      question: 'Which tag is used to define a closing paragraph element?',
      options: ['/<p> ', '<a>', '<body>', '<head>'],
      right: '</p>'
    }
  },

  Breaking: {
    title: 'Single Line Break',
    description:
      'Use the <br /> tag to add a single line of text without starting a new paragraph:',
    code: '  <p>This is <br /> a line break </p>',
    note: 'The <br /> element is an empty HTML element. It has no end tag.',
    test: [
      {
        question: 'Which is a self closing html tag:',
        options: ['<html>', '<br />', '</head>', '<p>'],
        right: '<br />'
      }
    ]
  },

  Formatting: {
    title: 'Formatting Elements',
    description:
      'In HTML, there is a list of elements that specify text style.Formatting elements were designed to display special types of text:',
    code: '  <p><strong> strong text </strong></p>',
    note: 'The <strong> tag is a phrase tag. It defines important text.',
    test: [
      {
        question: 'Which two tags below make the text visually bold? ',
        options: ['sub and sup', 'ins and del', 'b and strong', 'i and em'],
        right: '<b and strong>'
      }
    ]
  },

  HEADINGS: {
    title: 'HTML Headings',
    description:
      'HTML includes six levels of headings, which are ranked according to importance. These are <h1>, <h2>, <h3>, <h4>, <h5>, and <h6>.The following code defines all of the headings:',
    code:
      ' <h1>This is heading 1</h1><h2>This is heading 2</h2><h3>This is heading 3</h3><h4>This is heading 4</h4><h5>This is heading 5</h5><h6>This is heading 6</h6>',
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
  Question01: {
    test1: {
      question: 'Which tag is used to define a  paragraph element?',
      options: ['<p> ', '<a>', '<body>', '<head>'],
      right: '<p>'
    },

    test2: {
      question: 'Which is an opening html tag:',
      options: ['<html>', '</html>', '<head>', '<p>'],
      right: '<html>'
    }
  },

  Question02: {
    test1: {
      question:
        'Which element is placed between the <html> tag and the <body> tag. ',
      options: ['<link> ', '<a>', '<head>', '<title>'],
      right: '<head>'
    },

    test2: {
      question: 'Which tag defines the main content of the HTML document.',
      options: ['<audio>', '<body>', '<script>', '<iframe>'],
      right: '<body>'
    }
  },

  Question03: {
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

  Question04: {
    test1: {
      question: 'Which tag is used to define a closing paragraph element?',
      options: ['/<p> ', '<a>', '<body>', '<head>'],
      right: '</p>'
    },

    test2: {
      question: 'Which is a self closing html tag:',
      options: ['<html>', '<br />', '</head>', '<p>'],
      right: '<br />'
    }
  },

  Question05: {
    test1: {
      question: 'Which two tags below make the text visually bold? ',
      options: ['sub and sup', 'ins and del', 'b and strong', 'i and em'],
      right: '<b and strong>'
    },

    test2: {
      question: 'What tags are used to indicate headings?',
      options: ['header', 'h1 - h6', 'head', 'heading'],
      right: 'h1 - h6'
    }
  }
}

const HTML5Content = {
  HTML5: {
    title: 'What is New in HTML5?',
    description: 'The DOCTYPE declaration for HTML5 is very simple:',
    code: '<!DOCTYPE html>',
    note: 'The default character encoding in HTML5 is UTF-8.',
    test: {
      question: 'The default character encoding in HTML5 is ?',
      options: ['UTF-8', 'UTF-12', 'UTC-8', 'none of them'],
      right: 'UTF-8'
    }
  },

  NEW_ElEMENTS: {
    title: 'New HTML5 Elements',
    description:
      'The most interesting new HTML5 elements are: New semantic elements like <header>, <footer>, <article>, and <section>.New attributes of form elements like number, date, time, calendar, and range.New graphic elements: <svg> and <canvas>.New multimedia elements: <audio> and <video>.',
    note:
      'In the next chapter, HTML5 Support, you will learn how to "teach" older browsers to handle "unknown" (new) HTML elements.',
    test: [
      {
        question: 'Which of the following is HTML5 element? ',
        options: ['<svg> ', '<a>', '<head>', '<title>'],
        right: '<svg>'
      }
    ]
  },

  SEMENTICS: {
    title: 'HTML5 Semantic Elements',
    description:
      'A semantic element clearly describes its meaning to both the browser and the developer.',
    note:
      'Example for a newspaper: The sport <article> in the sport section, may have a technical section in each <article>.',
    test: [
      {
        question: 'Which of the following is new semantic HTML5 element?:',
        options: ['<html>', '</html>', '<article>', '<p>'],
        right: '<article>'
      }
    ]
  }
}
