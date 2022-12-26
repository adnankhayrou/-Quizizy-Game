const steps = document.querySelectorAll('.step');
const nextBtn = document.querySelector('#start-button');
const cards = document.querySelector('#cards-quiz');
const result = document.querySelector('#results');
const results = document.querySelector('#card-results');
let question = document.getElementById("question");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let nextQst = document.querySelectorAll('.answer');
let resParag = document.querySelector('.res-parag');
for (let i = 0; i < nextQst.length; i++) {
  nextQst[i].addEventListener('click',nextQuestion);
}
let currentStep = 0;
let questionIndex = randoom(questions);
let score = 0;


results.style.display = 'none';
result.style.display = 'none';
result.addEventListener('click', () => {
  document.querySelector("#cards-quiz").style.display = 'none';
  results.style.display = 'block';
})

document.querySelector("#cards-quiz").style.display = 'none';
    document.querySelector("#start-button").addEventListener('click', () => {
    document.querySelector("#cards-quiz").style.display = 'block';
    document.querySelector("#card-info").style.display = 'none';
    nextQuestion();
});

function randoom(arr){
 let index = Math.floor(Math.random() * (arr.length-1));
 return index;
} 

function displayquestion(questionIndex) {
  question.innerHTML = questions[questionIndex].question;
  choice1.innerHTML = questions[questionIndex].choice1;
  choice2.innerHTML = questions[questionIndex].choice2;
  choice3.innerHTML = questions[questionIndex].choice3;
  choice4.innerHTML = questions[questionIndex].choice4;

}

function nextQuestion(){
  if (questions.length == 0) {
    result.style.display = 'block';
    return
  }
  displayquestion(questionIndex);
}

function answerSubmit(answer){
  if (questions.length == 0) {
      return
  }
  if(answer == questions[questionIndex].correct){
    score++;
    console.log(score);
    if (score >= 5) {
      resParag.innerHTML = 'congrat you have ' + score + ' questions right you win';
    }else resParag.innerHTML = 'sorry you have only ' + score + ' questions right you lose good luck next time';
    
  }
  questions.splice(questionIndex,1);
  questionIndex = randoom(questions);
}

const updateStep = stepIndex => {
    // Update active step
  steps.forEach(s => s.classList.remove('active'));
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

