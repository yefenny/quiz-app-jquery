/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who created jQuery?',
      answers: [
        'Tim Cook',
        'Jeff Bezos',
        'John Resig',
        'Brendan Eich'
      ],
      correctAnswer: 'John Resig'
    },
    {
      question: 'What was jQuery called originally?',
      answers: [
        'queryJ',
        'JSelect',
        'John Resig Library',
        'JSLibrary'
      ],
      correctAnswer: 'JSelect'
    },
    {
      question: 'Which of the following is NOT a benefit to using jQuery?',
      answers: [
        'Create animated applications',
        'DOM Manipulation',
        'Simplifies JavaScript into more methods',
        'Extends the length of your JavaScript code'
      ],
      correctAnswer: 'Extends the length of your JavaScript code'
    },
    {
      question: 'Which is the correct syntax to select every paragraph (p) element using JavaScript?',
      answers: [
        '$('p')',
        '('p')',
        '$('paragraph')',
        '${'p'}'
      ],
      correctAnswer: '$('p')'
    },
    {
      question: 'Which of the following is NOT a method within the jQuery library?',
      answers: [
        'click()',
        'submit()',
        'attr()',
        'join()'
      ],
      correctAnswer: 'join()'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)