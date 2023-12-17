document.addEventListener("DOMContentLoaded", () => {
    let beats = 0;
    const heart = document.querySelector(".heart");
    const count = document.querySelector(".count");

    function blink() {
        beats++;

        count.textContent = `HeartBeats : ${beats}`;

        if(beats == 72) {
            clearInterval(interval);
        }
    }

    const interval = setInterval(blink, 833);
});