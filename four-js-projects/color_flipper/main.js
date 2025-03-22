const container = document.querySelector('.container')
const colorBoxes = document.querySelectorAll('.child');
console.log(colorBoxes);
colorBoxes.forEach((element)=>{
      element.addEventListener('click', (e)=>{
        // console.log(e.currentTarget.id
        // )
        const elementIndividual = e.currentTarget.id;

        if (elementIndividual === 'grey') {
          container.style.backgroundColor = 'grey';
        } else if(elementIndividual === 'white') {
          container.style.backgroundColor = 'white'
        } else if (elementIndividual === 'blue') {
          container.style.backgroundColor = 'blue'
        }else if (elementIndividual === 'yellow') {
          container.style.backgroundColor = 'yellow'
        }
      })
})