const heightElement = document.querySelector('#height');
const weightElement = document.querySelector('#weight');
const calcBtn =  document.querySelector('button');
console.log(heightElement, weightElement);
const result =  document.querySelector('.ans')

calcBtn.addEventListener('click' ,calculateBMI);


function calculateBMI() {
  const height = parseInt(heightElement.value)/100;
  const weight =parseInt( weightElement.value);

  const bmi = weight/ height**2;
  if (bmi < 18.6) {
    result.innerHTML = 'Underweight'
  } else if ( bmi >= 18.6 && bmi <= 24.9){
    result.innerHTML = 'Normal Range'
  }
  else if ( bmi > 24.9){
    result.innerHTML = 'Overweight'
  }
  
}