/*todo list: 
1. Nametext append to the form was not set correctly. 
*/


//set variables for HTML elements
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const endPageElement = document.getElementById('end-page')
let nameInput = document.getElementById('nameText').value; // stored entered name.
//const formEl = document.getElementById('enterName')
const submitBtnEl = document.getElementById("submitBtn") // need to set up an event listener. 
const timeEl = document.getElementById('secLeft');
const counter = document.getElementById("counter");
//const saveBtn = document.getElementById("saveScore");
const scoreListPage = document.getElementById('scoreList'); //adding score list div to toggle class.
const playerList = document.getElementById('playerList'); //adding playlist for append child.
let score;
let highScores = [];
// nameInput = "";

//let myForm = document.getElementById('enterName');

// let formData = new FormData(myForm);
// //set the timerInterval at the top of the question card. 
let secondsLeft = 120;

function setTimer() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      questionContainerElement.classList.add('hide')
      endPageElement.classList.remove('hide')
    }
  }, 1000); 
}

//set variables for shuffling questions and question index
let shuffledQuestions, currentQuestionIndex

//set up event listener for the start and next button.
startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  nextQuestion()
})


//start the game function.
function startGame() {
  score = 0
  setTimer()
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  nextQuestion()
}

//next question function.
function nextQuestion() {
  reset()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

//show the question function. 
function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', chooseAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function reset() {
  clearStatus(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function chooseAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if(correct) {
    score++
  };
  setStatus(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatus(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    questionContainerElement.classList.add('hide')
    //endPageElement.classList.remove('hide')
    counter.innerText = score; 
    showLeaderboard();
  }
}
//the nameInput is not declared properly. causing problems. 
//appendChild is not set properly. 
function showLeaderboard() {
  endPageElement.classList.remove('hide')
  //nameInput = nameInput.value; 
  submitBtnEl.addEventListener('click', () => {
    let listItem = document.createElement("li");
    let listText = `${nameInput.value}: ${counter} points`;
    listItem.appendChild(listText);
    playerList.appendChild(listItem);
});
}

//need to add local storage to the correct/wrong choices. 
function setStatus(element, correct) {
  clearStatus(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatus(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}


const questions = [
  {
    question: 'What is the name of the academy that represented the status quo in French art and detested the Impressionist movement?',
    answers: [
      { text: 'the Salon', correct: true },
      { text: 'the School of Art', correct: false },
      { text: 'the Palace', correct: false },
      { text: 'the Opera', correct: false }
    ]
  },
  {
    question: 'Who is the most famous American-born Impressionist artist?',
    answers: [
      { text: 'Mary Cassatt', correct: true },
      { text: 'Edouard Manet', correct: false },
      { text: 'Alfred Sisley', correct: false },
      { text: 'Berthe Morisot', correct: false }
    ]
  },
  {
    question: 'Who was the leader of France during the Impressionist movement?',
    answers: [
      { text: 'Eugene Haussman', correct: false },
      { text: 'Napoleon Bonaparte', correct: false },
      { text: 'Napoleon III', correct: true },
      { text: 'Charles DeGaulle', correct: false }
    ]
  },
  {
    question: 'Which artist, who was greatly influential on the Impressionist artists, helped start the artistic movement known as Realism?',
    answers: [
      { text: 'Gustave Courbet', correct: true },
      { text: 'Antoine Watteau', correct: false },
      { text: 'Eugene Delacroix', correct: false },
      { text: 'Hans Holbein', correct: false }
    ]
  },
  {
    question: 'Which Impressionist artist is famous for painting ballet dancers?',
    answers: [
      { text: 'Claude Monet', correct: false },
      { text: 'Auguste Renoir', correct: false },
      { text: 'Paul Cezanne', correct: false },
      { text: 'Edgar Degas', correct: true }
    ]
  },
  {
    question: 'Which artist is known for his lithography of the Moulin Rouge?',
    answers: [
      { text: 'Emile Zola', correct: false },
      { text: 'Henri Toulouse-Lautrec', correct: true },
      { text: 'Felix Nadar', correct: false },
      { text: 'Pierre Petit', correct: false }
    ]
  },
  {
    question: 'Which artist is known for painting Rouen Cathedral over 50 different times in all different conditions?',
    answers: [
      { text: 'Claude Monet', correct: true },
      { text: 'Georges Seurat', correct: false },
      { text: 'Paul Gauguin', correct: false },
      { text: 'Henri Matisse', correct: false }
    ]
  },
  {
    question: 'What artist painted the picture \'Le Moulin de la Galette\'?',
    answers: [
      { text: 'Auguste Renoir', correct: true },
      { text: 'Alfred Sisley', correct: false },
      { text: 'Paul Cezanne', correct: false },
      { text: 'Edouard Manet', correct: false }
    ]
  },
  {
    question: 'This artist who was inspired by Impressionism may have shot himself while painting the picture \'Wheatfield with Crows\'. What was his name?',
    answers: [
      { text: 'Alexandre Cabanel', correct: false },
      { text: 'Pablo Picasso', correct: false },
      { text: 'Vincent Van Gogh', correct: true },
      { text: 'Edvard Munch', correct: false }
    ]
  },
  {
    question: 'What artist, part of the Neo-Impressionist style, created the technique known as Pointilism?',
    answers: [
      { text: 'Jean Ingres', correct: false },
      { text: 'Paul Gauguin', correct: false },
      { text: 'Georges Seurat', correct: true },
      { text: 'Eugene Delacroix', correct: false }
    ]
  },
]
