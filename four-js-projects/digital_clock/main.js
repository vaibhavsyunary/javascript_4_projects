const  myWatch = document.querySelector('.clock');




window.addEventListener('DOMContentLoaded', setInterval(() => {
  const date =  new Date();
  myWatch.innerHTML = date.toLocaleTimeString();
}, 1000))