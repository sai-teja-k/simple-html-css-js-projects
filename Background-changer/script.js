const text = document.querySelector("p");
const body = document.querySelector("body");

colors = [ 'aqua ',  'tomato', 'blue' , 'brown', 'blurrywood', 'grey', 'slategrey', 'cornflowerblue', 'coral', 'yellowgreen', 'red', 'yellow', 'green'];

let index = 0;

function changeColor() {
    index = Math.floor(Math.random()*colors.length)
    text.textContent = colors[index];
    body.style.background = colors[index];
}