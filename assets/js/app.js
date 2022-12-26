const steps = document.querySelectorAll('.step');
const nextBtn = document.querySelector('#start-button');
const cards = document.querySelector('#cards-quiz');
const submit = document.getElementById('submit');
let question = document.getElementById("question");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");
let currentStep = 0;
let questionIndex = 0;

document.querySelector("#cards-quiz").style.display = 'none';
    document.querySelector("#start-button").addEventListener('click', function(){
    document.querySelector("#cards-quiz").style.display = 'block';
    document.querySelector("#card-info").style.display = 'none';
});


randomize(questions);
function displayQst(questionIndex){
  question.innerHTML = questions[questionIndex].question;
  choice1.innerHTML = questions[questionIndex].choice1;
  choice2.innerHTML = questions[questionIndex].choice2;
  choice3.innerHTML = questions[questionIndex].choice3;
  choice4.innerHTML = questions[questionIndex].choice4;
}

function nextQst(){
    if(qstIndex < qsts.length){
      displayQst(qstIndex);
      qstIndex++;
      progressupdate(qstIndex);
    }
  }
  let score = 0;
  function answerSubmit(answer){
    if(answer == qsts[qstIndex].correct){
      score++;
      choice = "correct";
    }
    else{
      choice = "wrong";
    }console.log(choice);}
  

    const updateStep = stepIndex => {
        // Update active step
        steps.forEach(s => s.classList.remove('active'));
        steps[stepIndex].classList.add('active');
        
        // Update buttons
        nextBtn.disabled = stepIndex === steps.length - 1;
      };      
      nextBtn.addEventListener('click', () => {
        currentStep++;
        updateStep(currentStep);
      });
      updateStep(currentStep);


// cards.innerHTML = `
// <h2 class="title1">Quiz Time</h2>
// <p class="question">${questions[0].qst}</p>

//             <div class="cards-ans">
//                 <div class="card">
//                     <p class="answer">${questions[0].choice1}</p>
//                 </div>
    
//                 <div class="card">
//                     <p class="answer">${questions[0].choice2}</p>
//                 </div>
    
//                 <div class="card">
//                     <p class="answer">${questions[0].choice3}</p>
//                 </div>
    
//                 <div class="card">
//                     <p class="answer">${questions[0].choice4}</p>
//                 </div>

//                 <div class="stepper-nav">
//                 <!-- <button class="prev-btn">Previous</button> -->
//                 <button type="submit" class="submit-btn">Submit</button>
//             </div>

                  
//             </div> `

