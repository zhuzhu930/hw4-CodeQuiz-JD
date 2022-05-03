//1. Connecting the Dom
//5 pages
const startPage = document.getElementById('startPage');
const questionPage = document.getElementById('questionPage'); 
const congratsPage = document.getElementById('congratsPage');
const leaderPage = document.getElementById('leaderPage');
const endPage = document.getElementById('endPage'); 
let form = document.getElementById("nameEntryForm");


//start page
const startBtn = document.getElementById('start');
const timerEl = document.getElementById('timer'); 
//question page
const questionText = document.getElementById('questionText'); 
const choiceA = document.getElementById('choiceA'); 
const choiceB = document.getElementById('choiceB'); 
const choiceC = document.getElementById('choiceC'); 
const choiceD = document.getElementById('choiceD'); 
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

//Congrats page
const playerScore = document.getElementById('score');
let playerName = document.getElementById('name');
const submitBtn = document.getElementById('submit'); 

//Leader page
const playerList = document.getElementById('playerList'); 
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

//2. Define variable for interactivity. 
let score = 0;
let timer;
let currentQ = 0;


//3. Add onclick event listeners to buttons.
startBtn.addEventListener("click", startGame); 
prevBtn.addEventListener("click", prevQ);
nextBtn.addEventListener("click", nextQ);
// submitBtn.addEventListener("submit", showLeaderPage);
yesBtn.addEventListener("click", startGame);
noBtn.addEventListener("click", showEndPage);
form.addEventListener('submit', handleForm);


//4. Write functions: setTimer, start, prev, next, submit, generate player, show leaderPage, show endPage, restart the game. 
function setTimer() {
    let timerInterval = setInterval(function () {
        timer--;
        if(questions[currentQ].answers[0].answer = false) {
            timer = timer - 5; 
        }
        timerEl.textContent = timer; 
        if(timer === 0) {
            clearInterval(timerInterval); 
            showCongratsPage();
        }

    },1000);
}

function startGame() {
    score = 0;
    currentQ = 0; //here current Q is a counter, question length is 10, index is from 0-9. 
    timer = 120; 
    setTimer();
    startPage.classList.add('hide');
    leaderPage.classList.add('hide');
    questionPage.classList.remove('hide');
    questionText.innerHTML = questions[currentQ].question; 
    choiceA.innerHTML = questions[currentQ].answers[0].choice; 
    choiceA.onclick = () => {
        if(questions[currentQ].answers[0].answer) {
            if (score < 10) {
                score++    
            }
            // choiceA.classList.add('true');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
    }
    choiceB.innerHTML = questions[currentQ].answers[1].choice; 
    choiceB.onclick = () => {
        if(questions[currentQ].answers[1].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('true'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
    }
    choiceC.innerHTML = questions[currentQ].answers[2].choice; 
    choiceC.onclick = () => {
        if(questions[currentQ].answers[2].answer) {
            if (score < 10) {
                score++ 
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('true'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
    }
    choiceD.innerHTML = questions[currentQ].answers[3].choice; 
    choiceD.onclick = () => {
        if(questions[currentQ].answers[3].answer) {
            if (score < 10) {
                score++
                
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('true'); 
        }
        playerScore.innerHTML = score; 
    }
    prevBtn.classList.remove('hide');
    if(currentQ < 9)
        {
            nextQ(); 
        }     
}


function prevQ() {
    currentQ--;
    if(currentQ <= 0) {
        nextBtn.classList.remove('hide');
        prevBtn.classList.add('hide');
    }
    questionText.innerHTML = questions[currentQ].question; 
    choiceA.innerHTML = questions[currentQ].answers[0].choice; 
    choiceA.onclick = () => {
        if(questions[currentQ].answers[0].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('true');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceB.innerHTML = questions[currentQ].answers[1].choice; 
    choiceB.onclick = () => {
        if(questions[currentQ].answers[1].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('true'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceC.innerHTML = questions[currentQ].answers[2].choice; 
    choiceC.onclick = () => {
        if(questions[currentQ].answers[2].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('true'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceD.innerHTML = questions[currentQ].answers[3].choice; 
    choiceD.onclick = () => {
        if(questions[currentQ].answers[3].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('true'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    nextBtn.classList.remove('hide');
    // if(currentQ < 9)
    //     {
    //         nextQ(); 
    //     } else if(currentQ >= 9) {
    //     showCongratsPage();
    // }
}

function nextQ() {
    currentQ++;
    questionText.innerHTML = questions[currentQ].question; 
    choiceA.innerHTML = questions[currentQ].answers[0].choice; 
    choiceA.onclick = () => {
        if(questions[currentQ].answers[0].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('true');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceB.innerHTML = questions[currentQ].answers[1].choice; 
    choiceB.onclick = () => {
        if(questions[currentQ].answers[1].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('true'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceC.innerHTML = questions[currentQ].answers[2].choice; 
    choiceC.onclick = () => {
        if(questions[currentQ].answers[2].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('true'); 
            // choiceD.classList.add('false'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    choiceD.innerHTML = questions[currentQ].answers[3].choice; 
    choiceD.onclick = () => {
        if(questions[currentQ].answers[3].answer) {
            if (score < 10) {
                score++
            }
            // choiceA.classList.add('false');
            // choiceB.classList.add('false'); 
            // choiceC.classList.add('false'); 
            // choiceD.classList.add('true'); 
        }
        playerScore.innerHTML = score; 
        // if(currentQ < 9)
        // {
        //     nextQ(); 
        // }
    }
    prevBtn.classList.remove('hide');
    // if(currentQ < 9)
    //     {
    //         nextQ(); 
    //     };
    // if(currentQ >= 9) {
    //     showCongratsPage();
    // };
    if(currentQ >= 9) {
        showCongratsPage();
    }
}

function handleForm(event) { 
    event.preventDefault(); 
    showLeaderPage();
} 

let catchNameInput = function() {
    let nameInput = playerName.value; 
    if(typeof nameInput === "string") {
       return nameInput; 
    }
}

function showCongratsPage() {
    startPage.classList.add('hide');
    questionPage.classList.add('hide');
    congratsPage.classList.remove('hide');
    leaderPage.classList.add('hide');
    endPage.classList.add('hide');
    // playerName = playerName.value;
    // submitBtn.addEventListener("submit", (e)=>
    // { debugger
    //     e.preventDefault()
    //     showLeaderPage();
    // });
}

function showLeaderPage() {
    debugger
    startPage.classList.add('hide');
    questionPage.classList.add('hide');
    congratsPage.classList.add('hide');
    leaderPage.classList.remove('hide');
    endPage.classList.add('hide');
    // playerName = playerName.value; 
    playerName = playerName.value;
    let listHtml = "";
    listHtml = `<li>Name: ${catchNameInput}; Score: ${score}</li>`;
    playerList.appendChild(listHtml);
}

function showEndPage() {
    startPage.classList.add('hide');
    questionPage.classList.add('hide');
    congratsPage.classList.add('hide');
    leaderPage.classList.add('hide');
    endPage.classList.remove('hide');
}
//toggle the right or wrong style in the HTML and CSS.
// function setClass(element, answer) {
//     clearClass(element)
//     if(answer) {
//         element.classList.add('true');
//     } else {
//         element.classList.add('false');
//     }
// }

// function clearClass(element) {
//     element.classList.remove('true');
//     element.classList.remove('false');
// }




// questions: 

const questions = [
    {
      question: 'What is the name of the academy that represented the status quo in French art and detested the Impressionist movement?',
      answers: [
        { choice: 'the Salon', answer: true },
        { choice: 'the School of Art', answer: false },
        { choice: 'the Palace', answer: false },
        { choice: 'the Opera', answer: false }
      ]
    },
    {
      question: 'Who is the most famous American-born Impressionist artist?',
      answers: [
        { choice: 'Mary Cassatt', answer: true },
        { choice: 'Edouard Manet', answer: false },
        { choice: 'Alfred Sisley', answer: false },
        { choice: 'Berthe Morisot', answer: false }
      ]
    },
    {
      question: 'Who was the leader of France during the Impressionist movement?',
      answers: [
        { choice: 'Eugene Haussman', answer: false },
        { choice: 'Napoleon Bonaparte', answer: false },
        { choice: 'Napoleon III', answer: true },
        { choice: 'Charles DeGaulle', answer: false }
      ]
    },
    {
      question: 'Which artist, who was greatly influential on the Impressionist artists, helped start the artistic movement known as Realism?',
      answers: [
        { choice: 'Gustave Courbet', answer: true },
        { choice: 'Antoine Watteau', answer: false },
        { choice: 'Eugene Delacroix', answer: false },
        { choice: 'Hans Holbein', answer: false }
      ]
    },
    {
      question: 'Which Impressionist artist is famous for painting ballet dancers?',
      answers: [
        { choice: 'Claude Monet', answer: false },
        { choice: 'Auguste Renoir', answer: false },
        { choice: 'Paul Cezanne', answer: false },
        { choice: 'Edgar Degas', answer: true }
      ]
    },
    {
      question: 'Which artist is known for his lithography of the Moulin Rouge?',
      answers: [
        { choice: 'Emile Zola', answer: false },
        { choice: 'Henri Toulouse-Lautrec', answer: true },
        { choice: 'Felix Nadar', answer: false },
        { choice: 'Pierre Petit', answer: false }
      ]
    },
    {
      question: 'Which artist is known for painting Rouen Cathedral over 50 different times in all different conditions?',
      answers: [
        { choice: 'Claude Monet', answer: true },
        { choice: 'Georges Seurat', answer: false },
        { choice: 'Paul Gauguin', answer: false },
        { choice: 'Henri Matisse', answer: false }
      ]
    },
    {
      question: 'What artist painted the picture \'Le Moulin de la Galette\'?',
      answers: [
        { choice: 'Auguste Renoir', answer: true },
        { choice: 'Alfred Sisley', answer: false },
        { choice: 'Paul Cezanne', answer: false },
        { choice: 'Edouard Manet', answer: false }
      ]
    },
    {
      question: 'This artist who was inspired by Impressionism may have shot himself while painting the picture \'Wheatfield with Crows\'. What was his name?',
      answers: [
        { choice: 'Alexandre Cabanel', answer: false },
        { choice: 'Pablo Picasso', answer: false },
        { choice: 'Vincent Van Gogh', answer: true },
        { choice: 'Edvard Munch', answer: false }
      ]
    },
    {
      question: 'What artist, part of the Neo-Impressionist style, created the technique known as Pointilism?',
      answers: [
        { choice: 'Jean Ingres', answer: false },
        { choice: 'Paul Gauguin', answer: false },
        { choice: 'Georges Seurat', answer: true },
        { choice: 'Eugene Delacroix', answer: false }
      ]
    },
  ]