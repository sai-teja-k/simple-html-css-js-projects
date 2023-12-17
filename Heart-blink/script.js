document.addEventListener("DOMContentLoaded", () => {

    const heart = document.querySelector(".heart");
    const count = document.querySelector(".count");
    const second = document.querySelector(".sec");
    const cycles = document.querySelector(".cycle")

    let beats = 0;
    let sec = 0;
    let cycle = 0;

    function blink() {

        beats++;

        count.textContent = `HeartBeats : ${beats}`;
        cycles.textContent = `Cycles : ${cycle}`;

        if(beats === 72) {
            cycle++;
            beats = 0;
            return;
        }
    }

    const intervalDuration = 60000 / 72;

    const interval = setInterval(blink, intervalDuration);

    setInterval( () => {
        sec++;
        second.textContent = `Seconds : ${sec}`;
        if(sec === 60 )
            sec = 0;
    }, 1000);

});