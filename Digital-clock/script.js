let hourText = document.querySelector(".hours");
let minText = document.querySelector(".min");
let secText = document.querySelector(".sec");
let lableText = document.querySelector(".lable");

let hourFormat = 0;
let minFormat = 0;
let secFormat = 0;


setInterval( () =>{

    let d = new Date();

    hourFormat = d.getHours();
    if(hourFormat > 12 )
        hourFormat -= 12;
    if (hourFormat < 10)
        hourFormat = "0"+hourFormat;

    minFormat = d.getMinutes();
    if(minFormat < 10)
        minFormat = "0"+minFormat;

    secFormat = d.getSeconds();
    if(secFormat < 10)
        secFormat = "0"+secFormat;

    hourText.textContent = hourFormat;
    minText.textContent = minFormat;
    secText.textContent = secFormat;

    if(hourFormat > 12)
        lableText.textContent = "PM";

},1000 );