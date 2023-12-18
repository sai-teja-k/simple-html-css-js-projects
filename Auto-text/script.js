const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Awesome", "Fun", "Cool", "Weird", "Famous", ":)"];
let index = 0;
let charIndex = 0;

const typeDelay = 200;
const eraseDelay = 200;
const newLetterDelay = 2000;

document.addEventListener("DOMContentLoaded", () => {
    if(words.length){
        setTimeout(type,newLetterDelay);
    }
});

function type(){
    if(charIndex < words[index].length){
        typedText.textContent += words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typeDelay);
    }
    else
        setTimeout(erase,newLetterDelay);
}

function erase(){
    if(charIndex > 0){
        typedText.textContent = words[index].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase,eraseDelay);
    }
    else{
        index++;
        if(index >= words.length) {
            index = 0;
        }
        setTimeout(type, typeDelay);
    }
}