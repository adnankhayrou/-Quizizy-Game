const steps = document.querySelectorAll('.step');
const nextBtn = document.querySelector('#start-button');
const cards = document.querySelector('#cards-quiz');
// const start = document.getElementById('button-start');
document.querySelector("#cards-quiz").style.display = 'none';
    document.querySelector("#start-button").addEventListener('click', function(){
    document.querySelector("#cards-quiz").style.display = 'block';
    document.querySelector("#card-info").style.display = 'none';
});



let currentStep = 0;
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

