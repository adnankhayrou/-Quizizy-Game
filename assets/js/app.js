const steps = document.querySelectorAll('.step');
const nextBtn = document.querySelector('#start-button');
const cards = document.querySelector('#cards-quiz');
const result = document.querySelector('#results');
const results = document.querySelector('#card-results');
const question = document.getElementById("question");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");
const resParag = document.querySelector('.res-parag');
const nextQst = document.querySelectorAll('.answer');
const counter = document.querySelector('.counter');
const answers = document.querySelector('.answers');
let questions = [];
let questionsStock = [];
json();
// 
// let intervalId;
// function questionTimer(){
//   let timer = 5;

//   intervalId = setInterval(() => {

//     timer--;
//     document.getElementById("timer").innerHTML = timer;
//     if(timer<=0){
//       nextQuestion();
//       answerSubmit("")
//       timer = 5;
//     } 
//   }, 500);
// }

// function play(){
//   nextQuestion();
//   questionTimer();
// }
// 

for (let i = 0; i < nextQst.length; i++) {
  nextQst[i].addEventListener('click',nextQuestion);
}
let currentStep = 0;
let questionIndex = randoom(questions) ;
let score = 0;
let questionCont = 0;


results.style.display = 'none';
result.style.display = 'none';
result.addEventListener('click', () => {
  document.querySelector("#cards-quiz").style.display = 'none';
  results.style.display = 'block';
  displayAnswers ();
})

document.querySelector("#cards-quiz").style.display = 'none';
    document.querySelector("#start-button").addEventListener('click', () => {
    document.querySelector("#cards-quiz").style.display = 'block';
    document.querySelector("#card-info").style.display = 'none';
    nextQuestion();
});

function randoom(arr){
 let index = Math.floor(Math.random() * (arr.length));
 return index;
} 

function displayquestion(questionIndex) {
  question.innerHTML = questions[questionIndex].question;
  choice1.innerHTML = questions[questionIndex].choice1;
  choice2.innerHTML = questions[questionIndex].choice2;
  choice3.innerHTML = questions[questionIndex].choice3;
  choice4.innerHTML = questions[questionIndex].choice4;

}

function displayAnswers () {
  for (let index = 0; index < questionsStock.length; index++) {
    answers.innerHTML += `
    <p class="questionn">${index+1}) - ${questionsStock[index].question}</p>
    <p class="justification">${questionsStock[index].justification}</p>`;
  }
}

function nextQuestion(){
  if (questions.length == 0) {
    // clearInterval(intervalId);
    result.style.display = 'block';
    return
  }
  
  questionCont++;
  counter.innerHTML = questionCont +'/'+ (questions.length-1+questionCont);
  // console.log(questionCont);
  displayquestion(questionIndex);
}

function answerSubmit(answer){
  if (questions.length == 0) {
      return
  }

  if(answer == questions[questionIndex].correct){
    score++;
    // console.log(score);
    if (score >= 5) {
      resParag.innerHTML = 'congrat your score is ' + score +'/10'+ ' you win.';
    }else resParag.innerHTML = 'sorry your score is ' + score +'/10'+ ' you lose good luck next time.';
  }else{
    questionsStock.push(questions[questionIndex]);
    // console.log(questionsStock);
  }
  
  questions.splice(questionIndex,1);
  questionIndex = randoom(questions);
  // console.log(questionIndex);
}

function updateStep (stepIndex) {
    // Update active step
  steps.forEach(step => step.classList.remove('active'));
  steps[stepIndex].classList.add('active');
};

nextBtn.addEventListener('click', () => {
  currentStep++;
  updateStep(currentStep);
});
result.addEventListener('click', () => {
  currentStep++;
  updateStep(currentStep);
});
updateStep(currentStep);



//AJAX
function json() {
  
  let getData = new XMLHttpRequest();
  getData.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                questions =JSON.parse(this.responseText);
              }
          };
  getData.open("GET", "/Quizizy-Game/php/scripts.php");
  getData.send();
}
