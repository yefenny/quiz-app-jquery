/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Who created jQuery?',
      answers: ['Tim Cook', 'Jeff Bezos', 'John Resig', 'Brendan Eich'],
      correctAnswer: 'John Resig'
    },
    {
      question: 'What was jQuery called originally?',
      answers: ['queryJ', 'JSelect', 'John Resig Library', 'JSLibrary'],
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
      question:
        'Which is the correct syntax to select every paragraph (p) element using JavaScript?',
      answers: [`$('p')`, `('p')`, `$('paragraph')`, `${'p'}`],
      correctAnswer: `$('p')`
    },
    {
      question:
        'Which of the following is NOT a method within the jQuery library?',
      answers: ['click()', 'submit()', 'attr()', 'join()'],
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

// This function will run the render functions
function main() {
  render();
}

// These functions return HTML templates
function questionTemplate() {
  // return html with the question in the title and the answers as radio buttons
  console.log('questionTemplate');
  // get score value
  scoreTemplate();
}

function startPageTemplate() {
  // render a welcome message with a button to start the quiz
  console.log('starPageTemplate');
}

function scoreTemplate() {
  //  calculate the score and return a html with correct format
  console.log('run scoreTemplate');
}

function rightAnswerTemplate() {
  // Display correct on title
  // show score
  // next button
}

function wrongAnswerTemplate() {
  // Display "wrong" on title
  // show the right answer
  // next button
}

function endOfGameTemplate() {
  // "End of Game" on title
  // show score
  // newGame botton
}

/********** RENDER FUNCTION(S) **********/
function render() {
  // if quizz started render question x

  // if not  render StartPage
  startPageTemplate();
}

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// This function handle on click start
function onClickStart() {
  // on click Start button set quizzStarted to true
  // render again
  render();
}

function onSubmit() {
  //  if question is correct render to correct page
  // else render to wrong page
  // increment question number
  // render
}

function onNext() {
  // on click next button render again
}

function onClickNewGame() {
  // reset question number
  // reset score
  // set quizzStarted to false
  // render;
}

$(main());
