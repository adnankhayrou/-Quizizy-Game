// const steps = document.querySelectorAll('.step');

// steps.forEach((step) => {
//   step.addEventListener('click', () => {
//     // Update active step
//     steps.forEach(s => s.classList.remove('active'));
//     step.classList.add('active');
//   });
// });


const steps = document.querySelectorAll('.step');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentStep = 0;


    const updateStep = stepIndex => {
        // Update active step
        steps.forEach(s => s.classList.remove('active'));
        steps[stepIndex].classList.add('active');
        
        // Update buttons
        prevBtn.disabled = stepIndex === 0;
        nextBtn.disabled = stepIndex === steps.length - 1;
      };
      
      prevBtn.addEventListener('click', () => {
        currentStep--;
        updateStep(currentStep);
      });
      
      nextBtn.addEventListener('click', () => {
        currentStep++;
        updateStep(currentStep);
      });
      
      updateStep(currentStep);



